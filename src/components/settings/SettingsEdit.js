import React from 'react';
import {Edit, required, SimpleForm, TextInput} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

const SettingsEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <TextInput validate={required()} label='Ключ' source="key" />
                <RichTextInput validate={required()} label='Значение' source="value" />
            </SimpleForm>
        </Edit>
    );
};

export default SettingsEdit;