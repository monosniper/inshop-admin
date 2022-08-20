import React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
} from "react-admin";

const SocialNetworkCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Ключ' source="slug"/>
            </SimpleForm>
        </Create>
    );
};

export default SocialNetworkCreate;