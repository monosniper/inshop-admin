import {$api, $server} from "../http";
const ADMIN_ROLE = 'admin';

const authProvider = {
    login: (code) => {

        return $server.post('/oauth/token', {
            client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
            redirect_uri: process.env.REACT_APP_OAUTH_CLIENT_REDIRECT_URI,
            grant_type: 'authorization_code',
            code
        }, {
            headers: {
                'Accept-Encoding': 'application/json',
            }
        }).then((rs) => {
            const { data } = rs

            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);

            return $api.get('/user', {
                headers: {
                    Authorization: "Bearer " + data.access_token,
                    'Accept-Encoding': 'application/json',
                }
            }).then(rs => {
                localStorage.setItem('auth', JSON.stringify(rs.data));

                return Promise.resolve();
            })
        }).catch((err) => {
            console.log(err)
            return null;
        })

        // return $server.post('/oauth/token', {
        //     client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
        //     client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        //     redirect_uri: process.env.REACT_APP_OAUTH_CLIENT_REDIRECT_URI,
        //     grant_type: 'authorization_code',
        //     code
        // }).then((rs) => {
        //     localStorage.setItem('access_token', rs.data.access_token);
        //     localStorage.setItem('refresh_token', rs.data.refresh_token);
        //
        //     return $api.get('/user').then(rs => {
        //         localStorage.setItem('auth', JSON.stringify(rs.data));
        //
        //         return Promise.resolve();
        //     })
        // })

        // return $api.get(`/sanctum/csrf-cookie`).then(response => {
        //     return $api.post('/login', {email, password}).then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //
        //         // Set api token in local storage
        //         return $api.post('/api/sanctum/token', {email, password}).then(response => {
        //             const token = response.data;
        //             localStorage.setItem('api_token', token);
        //             return token;
        //         }).then((token) => {
        //             // Set auth info in local storage
        //             return $api.get('/api/me?token=' + token).then(response => {
        //                 if(!authProvider.checkAdmin(response)) return Promise.reject('Для доступа к Админ панели необходимо быть администратором.');
        //                 localStorage.setItem('auth', JSON.stringify(response.data.data));
        //             }).then(() => {
        //                 return Promise.resolve();
        //             })
        //         })
        //     }).catch((e) => {
        //         return Promise.reject(e);
        //     });
        // });
    },
    checkError: (error) => {
        return Promise.resolve();
    },
    checkAdmin: (response) => {
        return response.data.data.isAdmin;
    },
    checkAuth: () => {
        // return $server.post('/oauth/token', {
        //     'grant_type': 'refresh_token',
        //     'refresh_token': localStorage.getItem('refresh_token'),
        //     'client_id': process.env.REACT_APP_OAUTH_CLIENT_ID,
        //     'client_secret': process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        //     'scope': '',
        // }).then(response => {
        //     return authProvider.checkAdmin(response) ? Promise.resolve() : Promise.reject();
        // }).catch(e => {
        //     return Promise.reject();
        // })

        const user = localStorage.getItem('auth');
        const token = localStorage.getItem('access_token');

        return user && token ? Promise.resolve() : Promise.reject();

        // return $api.post('/refresh', {token: localStorage.api_token}).then(response => {
        //     return authProvider.checkAdmin(response) ? Promise.resolve() : Promise.reject();
        // }).catch(e => {
        //     return Promise.reject();
        // })
    },
    logout: () => {
        return Promise.resolve();
    },
    getIdentity: async () => {
        try {
            const { id, fullname, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName: fullname, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: (params) => {
        return Promise.resolve();
    },
}

export default authProvider;