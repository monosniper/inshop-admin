import React from 'react';
import {Edit, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from "react-admin";

const SocialNetworkEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput validate={required()} label='Ключ' source="slug"/>
            </SimpleForm>
        </Edit>
    );
};

export default SocialNetworkEdit;