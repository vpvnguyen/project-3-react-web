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
  const [open, setOpen] = React.useState(true);
  const [businessInformation, setBusinessInformation] = React.useState(false);

  //on mount, we get business User using an ID and update the state
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/businessuser/" + props.user[0].id)
      .then(function(res) {
        setBusinessInformation(res);
      });
  }, [open]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {businessInformation ? <PersistentDrawer business={businessInformation} /> : console.log('Drawer not mounted yet')}
      
      <main
        className={classes.content}
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Container maxWidth="lg">
          <BusinessTable />
        </Container>
        <Footer />
      </main>
    </div>
  );
}
