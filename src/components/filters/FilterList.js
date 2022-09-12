import React from 'react';
import {
    Datagrid,
    DateField,
    NumberField,
    ExportButton,
    List,
    TextField,
    TextInput,
    TopToolbar,
    ReferenceOneField,
    DeleteButton,
    CreateButton, ReferenceField
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
        <CreateButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput key={'filter-q'} label="Search" source="q" alwaysOn  name={'q'}/>,
];

const FilterList = (props) => {
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
                    <TextField source={'slug'} />
                    <DeleteButton label={'Удалить'} />
                </Datagrid>
            </List>
        </>
    );
};

export default FilterList;