import React from 'react';
import {Edit, ReferenceArrayInput,SelectArrayInput, NumberInput, required, SimpleForm, TextInput} from "react-admin";

const ModuleEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title" />
                <TextInput validate={required()} label='Ключ' source="slug" />
                <TextInput multiline validate={required()} label='Описание' source="description" />
                <NumberInput validate={required()} label='Цена' source="price" />
                <ReferenceArrayInput source="dependencies_ids" reference="modules">
                    <SelectArrayInput optionText={'title'}/>
                </ReferenceArrayInput>
            </SimpleForm>
        </Edit>
    );
};

export default ModuleEdit;