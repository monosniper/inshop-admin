import React from 'react';
import {Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const FilterEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="title"  name={''}/>
                <TextInput validate={required()} label='Ключ' source="slug"  name={''}/>
            </SimpleForm>
        </Edit>
    );
};

export default FilterEdit;