import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "./base";

import clsx from "clsx";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      alignItems: "center",
   },
   wrapper: {
      margin: theme.spacing(1),
      position: "relative",
   },
   buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
         backgroundColor: green[700],
      },
   },
}));

const SignUp = ({ history }) => {
   const classes = useStyles();
   const [loading, setLoading] = useState(false),
      [email, setEmail] = useState("admin@domain.ooo"),
      [password, setPassword] = useState("s9Q7BN,7PhQg&q?3"),
      [severity, setSeverity] = useState("info"),
      [msg, setMsg] = useState("Enter email and password");

   const handleLogIn = () => {
      history.push("/login");
   };
   const handleSignUp = useCallback(
      async (event) => {
         setSeverity("info");
         setMsg(<CircularProgress style={{ height: 25, width: 25 }} />);
         setLoading(true);

         try {
            console.log("email = " + email);
            await app.auth().createUserWithEmailAndPassword(email, password);
            setTimeout(() => {
               setLoading(false);
               history.push("/");
            }, 2000);
         } catch (error) {
            console.log(error);
            setMsg(error.message);
            setSeverity("error");
         }
      },
      [history]
   );

   return (
      <div className="vertical-center center-outer">
         <div className="center-inner">
            <Paper style={{ maxWidth: 500, margin: 10 }} className="center">
               <div className="padding1">
                  <img src="./favw.png" />
                  <h3>Sign up</h3>
                  <Alert severity={severity}>{msg}</Alert>
                  <br />
                  <TextField
                     style={{ minWidth: "75%" }}
                     required
                     label="Email"
                     defaultValue={email}
                     onChange={(event) => setEmail(event.target.value)}
                  />
                  <TextField
                     style={{ minWidth: "75%" }}
                     required
                     label="Password"
                     type="password"
                     defaultValue={password}
                     onChange={(event) => setPassword(event.target.value)}
                  />
                  <br />
                  <br />
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={handleSignUp}
                     variant="contained"
                     disabled={loading}
                  >
                     Sign Up
                  </Button>
                  &nbsp;
                  <Button
                     variant="outlined"
                     color="primary"
                     onClick={handleLogIn}
                  >
                     Log In
                  </Button>
               </div>
            </Paper>
         </div>
      </div>
   );
};

export default withRouter(SignUp);
