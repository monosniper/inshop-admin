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

const LayoutOptionList = (props) => {
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
                    <TextField source={'description'} />
                    <TextField source={'slug'} />
                    <ReferenceField reference={'layoutOptions'} target={'parent_id'} label={'Род. Опция'}  source={'parent_id'}>
                        <TextField source={'name'} />
                    </ReferenceField>
                    <DeleteButton label={'Удалить'} />
                </Datagrid>
            </List>
        </>
    );
};

export default LayoutOptionList;