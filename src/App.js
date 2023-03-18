import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Account from "./pages/Account";
import PrivateRouter from "./routes/PrivateRouter";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
            <Route path="/account" element={<Account />}  />
          <Route path="/account" element={<PrivateRouter/>} > 
          </Route> 
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
