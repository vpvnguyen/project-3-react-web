import React from 'react';
import axios from 'axios'; 

// material-ui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// styling
const useStyles = makeStyles(theme => ({
    btnSpacing: {
        margin: theme.spacing(3, 0, 2),
    }
}));

// events
const handleClicks = () => {
    console.log('login');
    // route to auth
    window.open("http://localhost:5000/auth/google", "_self");
};

// render components
export default function BusinessSignIn() {
    const classes = useStyles();

    return (
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.btnSpacing}
            onClick={handleClicks}
        >
            Login
        </Button>
    )
}