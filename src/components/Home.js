import React from "react";
import app from "./base";
import Button from "@material-ui/core/Button";

export const Home = () => {
   return (
      <div>
         <Button
            variant="contained"
            color="primary"
            onClick={() => app.auth.signOut()}
         >
            Sign Out
         </Button>
      </div>
   );
};
