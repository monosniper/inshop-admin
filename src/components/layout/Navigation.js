import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import { Menu } from 'react-admin';
import {
    useTranslate, useSidebarState,
} from 'react-admin';

import users from '../users';
import domains from '../domains';
import shops from '../shops';
import modules from '../modules';
import layoutOptions from '../layoutOptions';
import colors from '../colors';
import feedBacks from '../feedBacks';
import settings from '../settings';
import social_networks from '../social_networks';
import filters from '../filters';

const Navigation = ({ dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCategories: true,
    });
    const translate = useTranslate();
    const open = useSidebarState();
    // useSelector((state) => state.theme); // force rerender on theme change
    // const classes = useStyles();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Menu>
            {/*<Menu.DashboardItem />*/}
            <Menu.Item
                to="/users"
                primaryText={translate(`resources.users.name`, {
                    smart_count: 2,
                })}
                leftIcon={<users.icon />}
            />
            <Menu.Item
                to="/domains"
                primaryText={translate(`resources.domains.name`, {
                    smart_count: 2,
                })}
                leftIcon={<domains.icon />}
            />
            <Menu.Item
                to="/shops"
                primaryText={translate(`resources.shops.name`, {
                    smart_count: 2,
                })}
                leftIcon={<shops.icon />}
            />
            <Menu.Item
                to="/modules"
                primaryText={translate(`resources.modules.name`, {
                    smart_count: 2,
                })}
                leftIcon={<modules.icon />}
            />
            <Menu.Item
                to="/layoutOptions"
                primaryText={translate(`resources.layoutOptions.name`, {
                    smart_count: 2,
                })}
                leftIcon={<layoutOptions.icon />}
            />
            <Menu.Item
                to="/colors"
                primaryText={translate(`resources.colors.name`, {
                    smart_count: 2,
                })}
                leftIcon={<colors.icon />}
            />
            <Menu.Item
                to="/filters"
                primaryText={translate(`resources.filters.name`, {
                    smart_count: 2,
                })}
                leftIcon={<filters.icon />}
            />
            <Menu.Item
                to="/social_networks"
                primaryText={translate(`resources.social_networks.name`, {
                    smart_count: 2,
                })}
                leftIcon={<social_networks.icon />}
            />
            <Menu.Item
                to="/feedBacks"
                primaryText={translate(`resources.feedBacks.name`, {
                    smart_count: 2,
                })}
                leftIcon={<feedBacks.icon />}
            />
            <Menu.Item
                to="/settings"
                primaryText={translate(`resources.settings.name`, {
                    smart_count: 2,
                })}
                leftIcon={<settings.icon />}
            />
        </Menu>
        // <div
        //     className={classnames(classes.root, {
        //         [classes.open]: open,
        //         [classes.closed]: !open,
        //     })}
        // >
        //     <MenuItemLink
        //         to={{
        //             pathname: '/users',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.users.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<users.icon />}
        //         dense={dense}
        //     />
        //     <MenuItemLink
        //         to={{
        //             pathname: '/domains',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.domains.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<domains.icon />}
        //         dense={dense}
        //     />
        //     <MenuItemLink
        //         to={{
        //             pathname: '/shops',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.shops.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<shops.icon />}
        //         dense={dense}
        //     />
        //     <MenuItemLink
        //         to={{
        //             pathname: '/modules',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.modules.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<modules.icon />}
        //         dense={dense}
        //     />
        //     <MenuItemLink
        //         to={{
        //             pathname: '/feedBacks',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.feedBacks.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<feedBacks.icon />}
        //         dense={dense}
        //     />
        //     <MenuItemLink
        //         to={{
        //             pathname: '/settings',
        //             state: { _scrollToTop: true },
        //         }}
        //         primaryText={translate(`resources.settings.name`, {
        //             smart_count: 2,
        //         })}
        //         leftIcon={<settings.icon />}
        //         dense={dense}
        //     />
        // </div>
    );
};

// const useStyles = makeStyles(theme => ({
//     root: {
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     open: {
//         width: 200,
//     },
//     closed: {
//         width: 55,
//     },
// }));

export default Navigation;