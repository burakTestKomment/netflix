import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";
//

/**
* @description This function is a higher-order component (HOC) that wraps another
* component with an authentication context provider and routes.
* 
* @returns {  } The output returned by this function is a JSX element representing
* the main component of an app's routes. It is a wrapper component that provides
* authentication context and routes for four different pages: Home , Login , Register
* , and Account .
*/
const AppRouter = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default AppRouter;
