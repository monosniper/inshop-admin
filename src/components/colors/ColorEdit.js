import React from 'react';
import {Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const ColorEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name"/>
                <TextInput validate={required()} label='Ключ' source="slug"/>
                <TextInput multiline label='Описание' source="description"/>
                <TextInput multiline label='Стандартный цвет' source="default_value"/>
            </SimpleForm>
        </Edit>
    );
};

export default ColorEdit;