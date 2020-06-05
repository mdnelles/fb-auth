import React, { useState, useEffect } from "react";
import { login } from "./Functions/User";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { Alert } from "@material-ui/lab";

const Msgbar = (props) => {
   const aStyle = {
      paddingRight: "50px",
      paddingBottom: "20px",
      color: "#444",
      textShadow: "1px 1px #aaaaaa",
   };
   return (
      <div style={aStyle}>
         <CircularProgress className={props.spin} /> {props.msg}
      </div>
   );
};

export const Login = () => {
   const [email, setEmail] = useState("test@test.com"),
      [password, setPassword] = useState("password"),
      [msg, setMsg] = useState("Enter valid credentials to proceed"),
      [alertType, setAlertType] = useState("success"),
      [alertMsg, setAlertMsg] = useState("Login to proceed"),
      [spin, setSpin] = useState("visible");
   // alert types [success, warning, info, error]

   function onSubmit(e) {
      e.preventDefault();
      setSpin("visible");
      setMsg("Checking credentials...");
      const user = {
         email: email,
         password: password,
      };
   }

   useEffect(() => {
      setSpin("hid");
      setMsg("Enter valid credentials to proceed");
   }, []);

   return (
      <div>
         <div className="vertical-center center-outer">
            <div
               className="center-inner"
               style={{
                  padding: 10,
                  minWidth: 300,
                  minHeight: 300,
                  padding: 20,
               }}
            >
               <Paper style={{ padding: 10, minWidth: 300, minHeight: 300 }}>
                  <Alert severity={alertType}>{alertMsg}</Alert>
                  Login here
                  <br />
                  https://mdnelles.github.io/firebase-auth/
               </Paper>
            </div>
         </div>
      </div>
   );
};
