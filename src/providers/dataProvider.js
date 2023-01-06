import simpleRestProvider from "ra-data-simple-rest";
import buildGraphQLProvider from 'ra-data-graphql';
import {fetchUtils} from "react-admin";
import {newGraphQLClient} from "../lib/apollo";

const fetchJson = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: 'Bearer ' + localStorage.getItem('access_token')
    };
    return fetchUtils.fetchJson(url, options);
};

const simpleRestDataProvider = simpleRestProvider(process.env.NEXT_PUBLIC_API_ORIGIN_URL + '/api', fetchJson, 'X-Total-Count');

const resources = {
    modules: {
        files: [
            'image',
            'images',
        ]
    },
}

const requestWithConvertedFiles = (resource, params, origin) => {
    let no_files_in_request = false;

    if(resources[resource]) {
        resources[resource].files.forEach(name => {
            if(!params.data[name]) no_files_in_request = true;
        })
    }

    if (!resources[resource] || no_files_in_request) {
        return origin(resource, params);
    }

    // Freshly dropped pictures are File objects and must be converted to base64 strings
    let newFiles = [];
    let formerFiles = [];

    resources[resource].files.forEach(type => {
        let files_from_name = [];
        let former_files_from_name = [];

        if(Array.isArray(params.data[type])) {
            files_from_name = params.data[type].filter(
                p => p.rawFile instanceof File
            ).map(file => {
                return {...file, type};
            });

            former_files_from_name = params.data[type].filter(
                p => !(p.rawFile instanceof File)
            ).map(file => {
                return {...file, type};
            });
        } else {
            let file = params.data[type];

            file.type = type;

            if(file.rawFile instanceof File) {
                files_from_name.push(file);
            } else {
                former_files_from_name.push(file);
            }
        }

        newFiles = [...newFiles, ...files_from_name];
        formerFiles = [...formerFiles, ...former_files_from_name];

        params.data[type] = [];
        params.data[`except_${type}`] = [];
    })

    return Promise.all(newFiles.map(convertFileToBase64))
        .then(base64Pictures =>
            base64Pictures.map((picture64, i) => {
                return {
                    src: picture64,
                    title: newFiles[i].title,
                    type: newFiles[i].type,
                }
            })
        )
        .then(transformedNewFiles => {
            let types = {};

            transformedNewFiles.forEach(file => {
                types[file.type] = transformedNewFiles.filter(f => f.type === file.type);
            })

            formerFiles.forEach(file => {
                types[`except_${file.type}`] = formerFiles.filter(f => f.type === file.type);
            })

            const data = {
                ...params.data,
                ...types
            }

            return origin(resource, {
                ...params, data
            });
        });
}



// const dataProvider = async () => {
//     // ...simpleRestDataProvider,
//     // const graphQlProvider = await buildGraphQLProvider({ client: newGraphQLClient('localhost:5000') })
//     // console.log(graphQlProvider)
//     return {
//         // ...graphQlProvider,
//         ...simpleRestDataProvider,
//         update: (resource, params) => requestWithConvertedFiles(resource, params, simpleRestDataProvider.update),
//         create: (resource, params) => requestWithConvertedFiles(resource, params, simpleRestDataProvider.create),
//     }
// };

const dataProvider = {
    ...simpleRestDataProvider,
    update: (resource, params) => requestWithConvertedFiles(resource, params, simpleRestDataProvider.update),
    create: (resource, params) => requestWithConvertedFiles(resource, params, simpleRestDataProvider.create),
}

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default dataProvider;