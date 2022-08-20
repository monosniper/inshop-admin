import React from 'react';
import {Create, required, BooleanInput, SimpleForm, FormDataConsumer, TextInput} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

const SettingsCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
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
        </Create>
    );
};

export default SettingsCreate;