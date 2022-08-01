import React from 'react';
import {Edit, SimpleForm} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

const FeedBackEdit = (props) => {
    return (
        <Edit title="Ответить" {...props}>
            <SimpleForm>
                <RichTextInput label='Ответ' source="answer" />
            </SimpleForm>
        </Edit>
    );
};

export default FeedBackEdit;