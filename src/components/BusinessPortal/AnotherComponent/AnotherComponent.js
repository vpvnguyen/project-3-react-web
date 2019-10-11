import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

// styling
const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

// render another component
export default function AnotherComponent() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Another Component</Title>
            <Typography component="p" variant="h4">
                $$$?
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                makin' bank
            </Typography>
        </React.Fragment>
    );
}