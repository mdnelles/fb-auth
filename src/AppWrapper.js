import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
//import localForage from "localforage";

//import { userIsLoggedIn } from "./components/UserFunctions";
import "./App.css";

import { Loading } from "./components/Loading";

export const AppWrapper = () => {
   const [activeSession, setActiveSession] = useState("loading");

   useEffect(() => {
      /*
      localForage
         .getItem("token", function (err, theToken) {
            if (err) {
               console.error("token err -> " + err);
            } else {
               userIsLoggedIn(theToken)
                  .then((data) => {
                     // imported fun
                     if (data === true || data === "true") {
                        setActiveSession("ok");
                     } else {
                        window.location.href = "/";
                     }
                  })
                  .catch((err) => {
                     console.log("user is not logged in " + err);
                     window.location.href = "/";
                  });
            }
         })
         .catch((err) => {
            console.log("user is not logged in " + err);
            window.location.href = "/";
         });
         */
   }, []);

   var ret = "";
   if (activeSession === "no") {
      ret = <Redirect to="/" />;
   } else if (activeSession === "loading") {
      ret = <Route path="/" component={Loading} />;
   } else {
      ret = (
         <div>
            {/*<MyNavbar />*/}
            {/*<Navleft />*/}
            <div className="appHolder ">
               {/*<Route exact path="/register" component={Register} */}
            </div>
         </div>
      );
   }

   return ret;
};
