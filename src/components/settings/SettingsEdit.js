import React from 'react';
import {BooleanInput, Edit, FormDataConsumer, required, SimpleForm, TextInput} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

const SettingsEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="name" />
                <TextInput validate={required()} label='Ключ' source="key" />
                <BooleanInput label="Текст" source="isRich" defaultChecked={false} />
                <FormDataConsumer>
                    {({ formData, ...rest }) => formData.isRich ?
                        <RichTextInput validate={required()} label='Значение' source="value" /> : <TextInput validate={required()} label='Значение' source="value" />
                    }
                </FormDataConsumer>
            </SimpleForm>
        </Edit>
    );
};

export default SettingsEdit;