import React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
    NumberInput, SelectInput, ReferenceInput,
} from "react-admin";

const FilterCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title"/>
                <TextInput validate={required()} label='Ключ' source="slug"/>
            </SimpleForm>
        </Create>
    );
};

export default FilterCreate;