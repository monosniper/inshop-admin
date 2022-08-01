import React from 'react';
import {Button, Menu, MenuItem, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {useListSortContext, useTranslate} from "react-admin";
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import {makeStyles} from "@mui/material/styles";

const useStyles = {
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: 'theme.spacing(2)',
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
};

// const SortableDatagridHeader = ({headerCells, isExpanded}) => {
const SortableDatagridHeader = ({headerCells, isExpanded}) => {
    // const { sort, setSort } = useListSortContext();
    //
    // const inverseOrder = sort => (sort === 'asc' ? 'desc' : 'asc');
    //
    // const handleChangeSort = (field) => {
    //     setSort(
    //         field,
    //         field === sort.field
    //             ? inverseOrder(sort.order)
    //             : 'asc'
    //     );
    // };
    //
    // return (
    //     <TableHead>
    //         <TableRow>
    //             <TableCell />
    //             {isExpanded ? <TableCell /> : null}
    //             {headerCells.map(headerCell => {
    //                 return (
    //                     <TableCell
    //                         key={headerCell.id}
    //                         align={'left'}
    //                         sortDirection={sort.field === headerCell.id ? sort.order : false}
    //                     >
    //                         {headerCell.sortable !== false ? (
    //                             <TableSortLabel
    //                                 active={sort.field === headerCell.id}
    //                                 direction={sort.field === headerCell.id ? sort.order.toLowerCase() : 'asc'}
    //                                 onClick={() => handleChangeSort(headerCell.id)}
    //                             >
    //                                 {headerCell.label}
    //                                 {sort.field === headerCell.id ? (
    //                                     <span
    //                                         sx={{
    //                                             border: 0,
    //                                             clip: 'rect(0 0 0 0)',
    //                                             height: 1,
    //                                             margin: -1,
    //                                             overflow: 'hidden',
    //                                             padding: 0,
    //                                             position: 'absolute',
    //                                             top: 20,
    //                                             width: 1,
    //                                         }}
    //                                         // className={classes.visuallyHidden}
    //                                     >
    //                                         {sort.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
    //                                     </span>
    //                                 ) : null}
    //                             </TableSortLabel>
    //                         ) : headerCell.label}
    //                     </TableCell>
    //                 )
    //             })}
    //         </TableRow>
    //     </TableHead>
    // );

    // sort is an object { field, order } containing the current sort
    // setSort is a callback ({ field, order }) => void allowing to change the sort field and order
    const { sort, setSort } = useListSortContext();
    // rely on the translations to display labels like 'Sort by sales descending'
    const translate = useTranslate();
    // open/closed state for dropdown
    const [anchorEl, setAnchorEl] = React.useState(null);

    // mouse handlers
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeSort = (event) => {
        const field = event.currentTarget.dataset.sort;
        setSort({
            field,
            order: field === sort.field ? inverseOrder(sort.order) : 'ASC'
        });
        setAnchorEl(null);
    };

    const getLabel = (id) => {
        const cell = headerCells.find(cell => cell.id === id);
        return cell ? cell.label : null;
    }

    // English stranslation is 'Sort by %{field} %{order}'
    const buttonLabel = translate('ra.sort.sort_by', {
        field: getLabel(sort.field),
        order: translate(`ra.sort.${sort.order}`),
    });

    return (<>
        <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="primary"
            onClick={handleClick}
            startIcon={<SortIcon />}
            endIcon={<ArrowDropDownIcon />}
            size="small"
            sx={{
                width: 'max-content',
                padding: '10px 20px',
                margin: '10px',
            }}
        >
            {buttonLabel}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {headerCells.map(field => ((field.label && field.sortable !== false) ? (
                <MenuItem
                    onClick={handleChangeSort}
                    // store the sort field in the element dataset to avoid creating a new click handler for each item (better for performance)
                    data-sort={field.id}
                    key={field.id}
                >
                    {field.label}{' '}
                    {translate(
                        `ra.sort.${
                            sort.field === field.id
                                ? inverseOrder(sort.order)
                                : 'ASC'
                        }`
                    )}
                </MenuItem>
            ) : null))}
        </Menu>
    </>);
};

const inverseOrder = sort => (sort === 'ASC' ? 'DESC' : 'ASC');

export default SortableDatagridHeader;