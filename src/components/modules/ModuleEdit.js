import React from 'react';
import {Edit, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const ModuleEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title" />
                <TextInput validate={required()} label='Ключ' source="slug" />
                <TextInput multiline validate={required()} label='Описание' source="description" />
                <NumberInput validate={required()} label='Цена' source="price" />
            </SimpleForm>
        </Edit>
    );
};

export default ModuleEdit;