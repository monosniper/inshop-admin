import React from 'react';
import {
    Create,
    required,
    SimpleForm,
    TextInput,
    NumberInput, SelectArrayInput, ReferenceArrayInput,
} from "react-admin";

const ModuleCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title" />
                <TextInput validate={required()} label='Ключ' source="slug" />
                <TextInput multiline validate={required()} label='Описание' source="description" />
                <NumberInput validate={required()} label='Цена' source="price" />
                <ReferenceArrayInput source="dependencies_ids" reference="modules">
                    <SelectArrayInput optionText={'title'}/>
                </ReferenceArrayInput>
            </SimpleForm>
        </Create>
    );
};

export default ModuleCreate;