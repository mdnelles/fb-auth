import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import app from "./base";

const SignUp = ({ history }) => {
   const [err, setErr] = useState("");
   const handleSignUp = useCallback(
      async (event) => {
         event.preventDefault();
         const { email, password } = event.target.elements;
         try {
            await app
               .auth()
               .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
         } catch (error) {
            console.log(error);
            setErr(
               JSON.stringify(error)
                  .replace(/\\/g, "")
                  .replace(/,/g, ",\n")
                  .replace(/}/g, "}\n")
            );
            //alert("whoaaa \n" + error);
         }
      },
      [history]
   );

   return (
      <div>
         <h1>Sign up</h1>
         <form onSubmit={handleSignUp}>
            <label>
               Email here
               <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  defaultValue="mike@oalytics.com"
               />
            </label>
            <label>
               Password
               <input
                  name="password"
                  type="text"
                  placeholder="Password"
                  defaultValue="somePASS12$$"
               />
            </label>
            <button type="submit">Sign Up</button>
            <div>
               <pre>
                  {err}
                  {process.env.REACT_APP_FIREBASE_KEY}
               </pre>
            </div>
         </form>
      </div>
   );
};

export default withRouter(SignUp);
