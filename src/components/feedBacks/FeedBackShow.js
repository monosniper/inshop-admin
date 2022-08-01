import React from 'react';
import {DateField, EmailField, ReferenceField, Show, SimpleShowLayout, TextField, useRecordContext} from "react-admin";

const FeedBackTitle = (props) => {
    const record = useRecordContext(props)
    return <span>{record.theme}</span>;
}

const FeedBackShow = (props) => {
    return <Show title={<FeedBackTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source='theme' />
            <EmailField source='email' />
            <TextField source='content' />
            <DateField source='created_at' />
        </SimpleShowLayout>
    </Show>;
};

export default FeedBackShow;