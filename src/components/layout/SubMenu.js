import * as React from 'react';
import { Fragment } from 'react';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useTranslate, useSidebarState} from 'react-admin';

// const useStyles = makeStyles(theme => ({
//     icon: { minWidth: theme.spacing(5) },
//     sidebarIsOpen: {
//         '& a': {
//             transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
//             paddingLeft: theme.spacing(4),
//         },
//     },
//     sidebarIsClosed: {
//         '& a': {
//             transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
//             paddingLeft: theme.spacing(2),
//         },
//     },
// }));

const SubMenu = (props) => {
    const { handleToggle, isOpen, name, icon, children, dense } = props;
    const translate = useTranslate();
    // const classes = useStyles();
    const classes = {
        sidebarIsOpen: 'hello',
        sidebarIsClosed: 'hello',
    }
    const sidebarIsOpen = useSidebarState()

    const header = (
        <MenuItem dense={dense} button onClick={handleToggle}>
            <ListItemIcon className={classes.icon}>
                {isOpen ? <ExpandMore /> : icon}
            </ListItemIcon>
            <Typography variant="inherit" color="textSecondary">
                {translate(name)}
            </Typography>
        </MenuItem>
    );

    return (
        <Fragment>
            {sidebarIsOpen || isOpen ? (
                header
            ) : (
                <Tooltip title={translate(name)} placement="right">
                    {header}
                </Tooltip>
            )}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding
                    className={
                        sidebarIsOpen
                            ? classes.sidebarIsOpen
                            : classes.sidebarIsClosed
                    }
                >
                    {children}
                </List>
            </Collapse>
        </Fragment>
    );
};

export default SubMenu;