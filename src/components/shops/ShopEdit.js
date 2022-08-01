import React from 'react';
import {
    Edit,
    ReferenceArrayInput,
    ReferenceInput,
    required,
    SelectArrayInput,
    SelectInput,
    SimpleForm,
    TextInput
} from "react-admin";
import {RichTextInput} from "ra-input-rich-text";

const ShopEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Название' source="options[title]" />
                <TextInput label='Слоган' source="options[slogan]" />

                <SelectInput label='Язык' source="options[language]" choices={[
                    { id: 'ru', name: 'Русский' },
                    { id: 'en', name: 'Английский' },
                ]} />

                <ReferenceArrayInput label={'Модули'} source="options[modules][]" reference="modules">
                    <SelectArrayInput optionText="title" />
                </ReferenceArrayInput>

                <ReferenceInput label="Пользователь" source="user_id" reference="users">
                    <SelectInput optionText="email" />
                </ReferenceInput>
                <ReferenceInput label="Домен" source="domain_id" reference="domains">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
};

export default ShopEdit;