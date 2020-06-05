import React, { useState, useEffect } from "react";
import { getck, login } from "./Functions/User";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import localForage from "localforage";
import Recaptcha from "react-recaptcha";

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
      [captchaKey, setCaptchaKey] = useState("na"),
      [submitVisibleClass, setSubmitVisibleClass] = useState("displayNone"),
      [msg, setMsg] = useState("Enter valid credentials to proceed"),
      [spin, setSpin] = useState("visible");

   const captcha = () => {
      setSubmitVisibleClass("displayBlock");
   };

   function onSubmit(e) {
      e.preventDefault();
      setSpin("visible");
      setMsg("Checking credentials...");
      const user = {
         email: email,
         password: password,
      };

      if (
         email === null ||
         email === "" ||
         password === null ||
         password === ""
      ) {
         setSpin("hid");
         setMsg("Please ender valid login credentials");
      } else {
         // firebase auth goes here
         console.log("get firebase ");
      }
   }

   let captchaPlace = "";
   if (captchaKey !== undefined && captchaKey !== "na") {
      // dont forget to add the following to the index.html file
      // <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      console.log("here");
      captchaPlace = (
         <Recaptcha
            sitekey={captchaKey}
            render="explicit"
            verifyCallback={(event) => captcha(event)}
         />
      );
   } else {
      captchaPlace = "";
   }

   useEffect(() => {
      setSpin("hid");
      setMsg("Enter valid credentials to proceed");

      console.log("captchaKey: " + captchaKey);
      if (captchaKey === "na") {
         // get captcha key
         getck().then((data) => {
            if (data !== undefined && data.length > 10) {
               setTimeout(() => {
                  setCaptchaKey(data);
               }, 200); // delay to ensure data is set
            } else {
               console.log("Err: not authorized for captch key");
            }
         });
      }
   }, [captchaKey]);

   return (
      <div>
         <div className="vertical-center center-outer" id="top">
            <div className="center-inner">
               <Paper>Login here</Paper>
            </div>
         </div>
      </div>
   );
};
