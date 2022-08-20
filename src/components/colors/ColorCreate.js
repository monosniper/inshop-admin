import React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
} from "react-admin";

const ColorCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name"/>
                <TextInput validate={required()} label='Ключ' source="slug"/>
                <TextInput multiline label='Описание' source="description"/>
                <TextInput multiline label='Стандартный цвет' source="default_value"/>
            </SimpleForm>
        </Create>
    );
};

export default ColorCreate;