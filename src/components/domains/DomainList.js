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
    ReferenceOneField,
    TextInput,
    TopToolbar,
    ReferenceField,
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput key={'filter-q'} label="Search" source="q" alwaysOn />,
];

const DomainList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Имя'},
        {id: 'shop_id', label: 'Магазин'},
        {id: 'user_id', label: 'Пользователь'},
        {id: '', label: '', sortable: false},
    ];

    return (
        <>
            <List {...props} sort={{ field: 'id', order: 'ASC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid
                    rowClick={'edit'}
                    {...props}
                    // header={<SortableDatagridHeader headerCells={headerCells} />}
                >
                    <TextField source={'id'} />
                    <TextField source={'name'} />
                    <ReferenceOneField link={'show'} label="Магазин" reference="shops" source={'shop_id'} target="domain_id">
                        <TextField source="options.title" />
                    </ReferenceOneField>
                    <ReferenceField link={'show'} label={'Пользователь'} reference="users" source={'user_id'}>
                        <TextField source="email" />
                    </ReferenceField>
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    );
};

export default DomainList;