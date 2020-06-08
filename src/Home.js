import React from "react";
import app from "./base";
import Nav from "./components/Nav";

const Home = () => {
   return (
      <>
         <Nav />
         <h1>Home</h1>
         <button onClick={() => app.auth().signOut()}>Sign out</button>
      </>
   );
};

export default Home;
