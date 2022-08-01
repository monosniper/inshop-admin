import React from 'react';
import {
    CreateButton,
    Datagrid,
    EditButton,
    ExportButton,
    DeleteButton,
    SimpleList,
    List, RichTextField,
    TextField,
    TextInput,
    TopToolbar
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const SettingsList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Название'},
        {id: 'key', label: 'Ключ'},
        {id: 'value', label: 'Значение'},
        {id: '', label: '', sortable: false},
    ];

    return (
        <>
            <List {...props}  sort={{ field: 'id', order: 'ASC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid
                    rowClick={'edit'}
                    {...props}
                    // header={<SortableDatagridHeader headerCells={headerCells} />}
                >
                    <TextField source={'id'} />
                    <TextField source={'name'} />
                    <TextField source={'key'} />
                    <RichTextField source={'value'} />
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    );
};

export default SettingsList;