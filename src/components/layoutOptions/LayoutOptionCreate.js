import React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
    NumberInput, SelectInput, ReferenceInput,
} from "react-admin";

const LayoutOptionCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name"/>
                <TextInput validate={required()} label='Ключ' source="slug"/>
                <TextInput multiline validate={required()} label='Описание' source="description"/>
                <ReferenceInput label="Родительская опция" source="parent_id" reference="layoutOptions">
                    <SelectInput optionText="name"/>
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default LayoutOptionCreate;