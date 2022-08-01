import React from 'react';
import {Create, ReferenceInput, SelectArrayInput, ReferenceArrayInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const ShopCreate = (props) => {
    return (
        <Create title="Создать вопрос" {...props}>
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
        </Create>
    );
};

export default ShopCreate;