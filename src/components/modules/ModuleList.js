import React from 'react';
import {Datagrid, DateField, NumberField, ExportButton, List, TextField, TextInput, TopToolbar} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const ModuleList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'title', label: 'Название'},
        {id: 'description', label: 'Описание'},
        {id: 'price', label: 'Цена'},
        {id: 'slug', label: 'Ключ'},
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
                    <TextField source={'title'} />
                    <TextField source={'description'} />
                    <NumberField source={'price'} />
                    <TextField source={'slug'} />
                </Datagrid>
            </List>
        </>
    );
};

export default ModuleList;