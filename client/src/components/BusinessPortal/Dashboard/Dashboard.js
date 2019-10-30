import React, { useEffect } from "react";
import axios from "axios";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Container from "@material-ui/core/Container";

// components
import Footer from "../../Footer/Footer.js";
import PersistentDrawer from "../PersistentDrawer/PersistentDrawer.js";
import BusinessTable from "../BusinessTable/BusinessTable.js";

// auth 
import AuthService from '../../AuthService.jsx'; 

// set styling
const useStyles = makeStyles(theme => ({}));

// render dashboard
export default function Dashboard(props) {
  const Auth = new AuthService('http://localhost:5000');
  const classes = useStyles();
  const [open] = React.useState(true);
  const [businessInformation, setBusinessInformation] = React.useState(false);
  const [currentBusiness, setCurrentBusiness] = React.useState(0);
  const [hasBusiness, setHasBusiness] = React.useState(false);
  const [user, setUser] = React.useState([]); 

  //on mount, we get business User using an ID and update the state
  useEffect(() => {
    console.log(props.user)
    if (props.user) {
      axios
        .get("http://localhost:3000/api/businessuser/" + props.user.id)
        .then(function (res) {
          setBusinessInformation(res);
          setCurrentBusiness(res.data[0].id);
          setHasBusiness(true);
          setUser(props.user[0]); 
        }).catch(err => err); 
    } else if (props.location.user) {
      axios
        .get("http://localhost:3000/api/businessuser/" + props.location.user.id)
        .then(function (res) {
          setBusinessInformation(res);
          setCurrentBusiness(res.data[0].id);
          setHasBusiness(true);
          setUser(props.location.user[0]); 
        }).catch(err => err); 
    } else if (user.length === 0) {
        let profile = Auth.getProfile(); 
        axios
        .get("http://localhost:3000/api/businessuser/" + profile.id)
        .then(function (res) {
          setBusinessInformation(res);
          setCurrentBusiness(res.data[0].id);
          setHasBusiness(true);
          setUser(profile); 
        }).catch(err => err); 
    }
  }, [props.user]);

  const currentBusinessChange = id => {
    console.log("setting");
    setCurrentBusiness(id);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      {businessInformation ? (
        <PersistentDrawer
          business={businessInformation}
          currentBusinessChange={currentBusinessChange}
          userName={user.name}
        />
      ) : (
          console.log("Drawer not mounted")
        )}

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Container maxWidth="lg">
          <div>
            {hasBusiness ? (
              <BusinessTable businessId={currentBusiness} />
            ) : (
                console.log("not mounted")
              )}
          </div>
        </Container>
        <Footer />
      </main>
    </div>
  );
};
