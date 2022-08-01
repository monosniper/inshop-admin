import * as React from "react";
import PropTypes from 'prop-types';
import {ChipField, useRecordContext, useTranslate} from 'react-admin';
import Chip from '@mui/material/Chip';
import Avatar from "@mui/material/Avatar";

const UserField = (props) => {
    const translate = useTranslate();
    const record = useRecordContext(props);
    return <span className={'roles-field'}>
        {record.roles.map((role, i) => {
            return <Chip label={translate('roles.'+role)} key={'users-role-'+i}/>
        })}
    </span>;
}

UserField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string,
};

export default UserField;