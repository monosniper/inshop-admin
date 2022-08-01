import React from 'react';
import {Create, required, SimpleForm, TextInput} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

const SettingsCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <TextInput validate={required()} label='Ключ' source="key" />
                <RichTextInput validate={required()} label='Значение' source="value" />
            </SimpleForm>
        </Create>
    );
};

export default SettingsCreate;