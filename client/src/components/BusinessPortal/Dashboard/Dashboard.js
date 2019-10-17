import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import Container from "@material-ui/core/Container";

// components
import Footer from "../../Footer/Footer";
import PersistentDrawer from "../PersistentDrawer/PersistentDrawer";
import BusinessTable from "../BusinessTable/BusinessTable";
// set styling
const useStyles = makeStyles(theme => ({}));

// render dashboard
export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <PersistentDrawer />
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
