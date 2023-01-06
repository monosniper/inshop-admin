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
    CreateButton, ReferenceArrayField, ChipField, SingleFieldList
} from "react-admin";
import SortableDatagridHeader from "../SortableDatagridHeader";
import Description from "./Description";

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
        <CreateButton/>
    </TopToolbar>
);

const ListFilters = [
    <TextInput key={'filter-q'} label="Search" source="q" alwaysOn  name={'q'}/>,
];

const ModuleList = (props) => {
    return (
        <>
            <List {...props}  sort={{ field: 'id', order: 'ASC' }} actions={<ListActions />} filters={ListFilters}>
                <Datagrid
                    rowClick={'edit'}
                    {...props}
                    expand={<Description />}
                    // header={<SortableDatagridHeader headerCells={headerCells} />}
                >
                    <TextField source={'id'} />
                    <TextField source={'title'} />
                    <NumberField source={'price'} />
                    <ReferenceArrayField label={'Зависимости'} sort={false} source={'dependencies_ids'} reference={'modules'}>
                        <SingleFieldList label={'Зависимости'}>
                            <ChipField label={'Зависимости'} source="title" />
                        </SingleFieldList>
                    </ReferenceArrayField>
                    <TextField source={'slug'} />
                </Datagrid>
            </List>
        </>
    );
};

export default ModuleList;