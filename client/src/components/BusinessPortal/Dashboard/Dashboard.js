import React from "react";
import axios from "axios";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Container from "@material-ui/core/Container";

// components
import Footer from "../../Footer/Footer";
import PersistentDrawer from "../PersistentDrawer/PersistentDrawer";
import BusinessTable from "../BusinessTable/BusinessTable";
import { useEffect } from "react";
// set styling
const useStyles = makeStyles(theme => ({}));

// render dashboard
export default function Dashboard(props) {
  const classes = useStyles();
  const [open] = React.useState(true);
  const [businessInformation, setBusinessInformation] = React.useState(false);
  const [currentBusiness, setCurrentBusiness] = React.useState(0);
  const [hasBusiness, setHasBusiness] = React.useState(false);

  //on mount, we get business User using an ID and update the state
  useEffect(() => {
    axios
      .get("http://localhost/api/businessuser/" + props.user[0].id)
      .then(function(res) {
        setBusinessInformation(res);
        setCurrentBusiness(res.data[0].id);
        setHasBusiness(true);
      });
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
          userName={props.user[0].name}
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
}
