import React from 'react';
import {Create, SelectInput, ReferenceInput, required, SimpleForm, TextInput} from "react-admin";

const DomainCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Имя домена' source="name" />
                <ReferenceInput label="Пользователь" source="user_id" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default DomainCreate;