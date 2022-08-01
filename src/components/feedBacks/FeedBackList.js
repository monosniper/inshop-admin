import React, {useMemo} from 'react';
import {
    CreateButton,
    Datagrid,
    DateField, EmailField,
    ExportButton,
    FunctionField,
    List,
    TextField,
    TextInput,
    RichTextField,
    EditButton,
    TopToolbar, useRecordContext
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput key={'filter-q'} label="Search" source="q" alwaysOn />,
];

const FeedbackAnswer = ({ record }) => {
    return (
        <RichTextField source={'answer'}></RichTextField>
    );
};

const stopPropagation = e => e.stopPropagation();

const AnswerButton = (props) => {
    const record = useRecordContext(props);

    return (
        <Button
            component={Link}
            to={`feedbacks/${record.id}/edit`}
            onClick={stopPropagation}
        >Ответить</Button>
    );
}

const FeedBackList = (props) => {
    const headerCells = [
        {id: null, label: '', sortable: false},
        {id: 'id', label: 'ID'},
        {id: 'theme', label: 'Тема'},
        {id: 'email', label: 'E-mail'},
        {id: 'created_at', label: 'Дата создания'},
        {id: null, label: '', sortable: false},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid
                    expand={<FeedbackAnswer />}
                    rowClick={'show'}
                    {...props}
                    // header={<SortableDatagridHeader headerCells={headerCells} />}
                >
                    <TextField source={'id'} />
                    <TextField source={'theme'} />
                    <EmailField source={'email'} />
                    <DateField source={'created_at'} />
                    <EditButton label={'Ответить'} />
                </Datagrid>
            </List>
        </>
    );
};

export default FeedBackList;