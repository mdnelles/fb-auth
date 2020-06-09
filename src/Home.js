import React from "react";
import Nav from "./components/Nav";

const Home = () => {
   return (
      <>
         <Nav />
         <h4>Home</h4>
         You are currently logged in via firebase.authentication
      </>
   );
};

export default Home;
