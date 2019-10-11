import React, { Component } from 'react';
import Splash from '../Splash/SignIn/SignIn.jsx';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from '../BusinessPortal/Dashboard/Dashboard.js';

const theme = createMuiTheme({
    palette: {
        type: 'light', // 'light', 'dark', manualColor
    },
});

// render web application
class Main extends Component {
    render() {

        return (
            <div className="container">
                <ThemeProvider theme={theme} >

                    <Splash />
                    <hr />
                    <Dashboard />

                </ThemeProvider>
            </div>
        )
    }
}

export default Main;