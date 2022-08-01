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
    SingleFieldList,
    ReferenceArrayField,
    TopToolbar, ReferenceField, ChipField
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

const ShopList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'options.title', label: 'Название'},
        {id: 'domain_id', label: 'Домен'},
        {id: 'user_id', label: 'Пользователь'},
        {id: 'modules', label: 'Модули'},
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
                    <TextField source={'options.title'} />
                    <ReferenceField link={'show'} source="domain_id" reference="domains" sortable={false}>
                        <TextField source="name" />
                    </ReferenceField>
                    <ReferenceField link={'show'} source="user_id" reference="users" sortable={false}>
                        <TextField source="email" />
                    </ReferenceField>
                    <ReferenceArrayField label="Модули" reference="modules" source="modules" sortable={false}>
                        <SingleFieldList>
                            <ChipField source="title" />
                        </SingleFieldList>
                    </ReferenceArrayField>
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    );
};

export default ShopList;