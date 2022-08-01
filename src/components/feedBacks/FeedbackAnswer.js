import React from 'react';
import {required} from "react-admin";
// import {makeStyles} from "@mui/styles";
import RichTextInput from "ra-input-rich-text";

const FeedbackAnswer = (props) => {

    const feedback_id = props.match.params.id;
    // const { record, save, isLoading } = useEditController({ resource: 'feedBacks', feedback_id });
    console.log(props)
    const styles = {
        title: { maxWidth: 544 },
        description: { maxWidth: 544},
        first_name: { display: 'inline-block' },
        last_name: { display: 'inline-block', marginLeft: 32 },
        email: { width: 544 },
        min: { maxWidth: 544 },
        field: { width: 256 },
        zipcode: { display: 'inline-block' },
        city: { display: 'inline-block', marginLeft: 32 },
        comment: {
            maxWidth: '20em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        password: { display: 'inline-block' },
        password_confirmation: { display: 'inline-block', marginLeft: 32 },
    };

    // const useStyles = makeStyles(styles);
    // const classes = useStyles(props);
return <p>hello</p>;
    // return isLoading ? (
    //     <Card>
    //         <Title title="Ответить" />
    //         <CardContent>
    //             <p>Загрузка</p>
    //         </CardContent>
    //     </Card>
    // ) : (
    //     <EditBase>
    //         <Title title={`Обратная связь #${record.id}`} />
    //         <CardContent>
    //             <h3>Тема: {record.theme}</h3>
    //
    //             {record.content}
    //
    //             <SimpleForm record={record} onSubmit={save}>
    //                 <RichTextInput label='Описание' validate={requiredValidate} source="answer" formClassName={classes.description} sx={{maxWidth: 544}} />
    //             </SimpleForm>
    //         </CardContent>
    //     </EditBase>
    // );
};

const requiredValidate = [required()];

export default FeedbackAnswer;