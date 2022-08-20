import React from 'react';
import {Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const LayoutOptionEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name"  name={''}/>
                <TextInput validate={required()} label='Ключ' source="origin_slug"  name={''}/>
                <TextInput multiline validate={required()} label='Описание' source="description"  name={''}/>
                <ReferenceInput label="Родительская опция" source="parent_id" reference="layoutOptions" name={''}>
                    <SelectInput optionText="name"  field={''} fieldState={''} formState={''} name={''} source={''}/>
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};

export default LayoutOptionEdit;