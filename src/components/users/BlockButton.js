import React from 'react';
import {Button} from "@mui/material";
import BlockIcon from '@mui/icons-material/Block';
// import {useRefresh} from "ra-core";
import {$api} from "../../http";
import {useRecordContext, useRefresh} from "react-admin";

const BlockButton = (props) => {
    const refresh = useRefresh();
    const record = useRecordContext(props);
    const buttonText = record.isBlock ? 'Разблокировать' : 'Блок';
    const link = record.isBlock ? 'unblock' : 'block';

    const handleClick = () => {
        $api.get(`users/${record.id}/${link}`).then(refresh)
    }

    return (
        <Button color={'primary'} startIcon={record.isBlock ? <></> : <BlockIcon />} onClick={() => handleClick()}>
            {buttonText}
        </Button>
    );
};

export default BlockButton;