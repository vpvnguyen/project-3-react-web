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
  const [item, setItem] = React.useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/businessuser/' + props.user[0].id)
  //   .then(function(res) {
  //     alert(JSON.stringify(res.data))
  //   })
  // }, [])
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/businessuser/" + props.user[0].id)
      .then(function(res) {

        setItem(res);
      });
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      {item ? <PersistentDrawer business={item} /> : console.log('no drawer')}
      
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
