import React, { cloneElement } from 'react';
import {
    List,
    FilterButton,
    TextInput,
    TopToolbar,
    CreateButton,
    ExportButton,
    Datagrid,
    DatagridBody,
    DeleteButton,
    TextField,
    EmailField,
    DateField,
    EditButton,
    Link, ChipField, BooleanField,
} from 'react-admin';
import { TableHead, TableRow, TableCell, Checkbox, Tooltip, Avatar } from '@mui/material';
import UserField from "./UserField";
import RolesField from "./RolesField";
import { green, red } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SortableDatagridHeader from "../SortableDatagridHeader";
import BlockButton from "./BlockButton";

const ListActions = (props) => (
    <TopToolbar>
        <FilterButton/>
        {/*<CreateButton/>*/}
        <ExportButton/>
    </TopToolbar>
);

const filters = [
    <TextInput key={'filter-q'} label="Search" source="q" alwaysOn />,
];

const MyDatagridRow = ({ record, resource, id, onToggleItem, children, selected, selectable, basePath }) => (
    <TableRow key={id}>
        {/* first column: selection checkbox */}
        <TableCell padding="none">
            <Checkbox
                checked={selected}
                onClick={event => onToggleItem(id, event)}
            />
        </TableCell>
        <TableCell>
            <TextField textAlign={'center'} source={'id'} record={record}/>
        </TableCell>
        <TableCell>
            <Link to={`/users/${record.id}`}>
                <UserField record={record} isRecordUser={true}/>
            </Link>
        </TableCell>
        <TableCell>
            <TextField source={'username'} record={record}/>
        </TableCell>
        <TableCell>
            <div className={'email-field'}>
                <EmailField source={'email'} record={record}/>
                <Tooltip title={record.email_verified_at ? 'Верифицирован' : 'Не верифицирован'}>
                    {record.email_verified_at ? (
                        <CheckCircleIcon style={{ fontSize: 15, color: green[600] }} />
                    ) : (
                        <HighlightOffIcon style={{ fontSize: 15, color: red[600] }} />
                    )}
                </Tooltip>
            </div>
        </TableCell>
        <TableCell>
            <RolesField record={record}/>
        </TableCell>
        <TableCell>
            <DateField source={'created_at'} record={record}/>
        </TableCell>
    </TableRow>
);

const MyDatagridBody = props => <DatagridBody {...props} row={<MyDatagridRow />} />;

const UserList = (props) => {
    const headerCells = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Имя'},
        {id: 'email', label: 'Почта'},
        {id: 'isAdmin', label: 'Админ', sortable: false},
        {id: 'created_at', label: 'Дата регистрации'},
        {id: '', label: '', sortable: false},
        {id: '', label: '', sortable: false},
    ];
    
    return (
        <List {...props} sort={{ field: 'created_at', order: 'DESC' }} actions={<ListActions />} filters={filters}>
            <Datagrid
                // rowClick={'show'}
                {...props}
                // header={<SortableDatagridHeader headerCells={headerCells} />}
            >
                <TextField source="id" />
                {/*<LinkField link={'freelance/employer'} getId={(record) => record.id} isToSite={true} field={<UserField getUser={(record) => record} {...props} />} />*/}
                <TextField source="name" />
                <EmailField source="email" />
                <BooleanField source='isAdmin'/>
                <DateField source="created_at" />
                <BlockButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
};

export default UserList;