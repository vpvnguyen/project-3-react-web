/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';

// constructor for creating mock data
function createData(id, name, qtypeople, description) {
    return { id, name, qtypeople, description };
}

// generate mock data
const rows = [
    createData(0, 'Cinco De Mayo', '15% off on all beers', 10),
    createData(1, 'Independence Day', 'Buy 1 get 1 free', 15),
    createData(2, 'Super Bowl', '1 Free Appetizer', 5),
    createData(3, 'Bootcamp Graduation Party', '25% off drinks with student ID', 8),
    createData(4, 'Jay-Z\'s Birthday Party', 'Free valet parking', 4)
];

// styling
const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

// render promotions
export default function Promotions() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>My Promotions</Title>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>qtypeople</TableCell>
                        {/* <TableCell align="right">Some buttons</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.qtypeople}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            {/* <TableCell align="right">{row.amount}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="javascript:;">
                    See more orders
        </Link>
            </div>
        </React.Fragment>

    );
}