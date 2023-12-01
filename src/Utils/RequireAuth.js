import React from "react";
//import Cookies from "universal-cookie";
// import { Navigate } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
//import { getAuthorization } from "./apiConfig";

const RequireAuth = ({ children }) => {
  //const accessToken = sessionStorage.getItem("authToken");
  //console.log(accessToken);
  //if (!accessToken) {
    //return <Navigate to="/" />;
  //}

  return <AdminLayout>{children}</AdminLayout>;
};

export default RequireAuth;
