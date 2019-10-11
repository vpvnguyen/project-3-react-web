import React from 'react';
// reset css material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

// material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Footer from '../../Footer/Footer';

// styling; export to css
const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// render sign in page
export default function SignIn() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LocalBarIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Dat Beer App
                    </Typography>

                    <Button className="btnMargin"
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        className={classes.submit}
                    >
                        Login
                        </Button>
                    <Button className={classes.button}
                        type="submit"
                        fullWidth
                        variant="outline"
                        color="inherit"
                    >
                        Get App for iOS and Android!
                        </Button>

                    <Box mt={5}>
                        <Footer />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}