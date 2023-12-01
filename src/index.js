import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Scss/index.scss";
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { DetailProvider } from "./Contexts/DetailContext";
import { UserProvider } from './Contexts/UserContext';
import router from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <UserProvider>
    <DetailProvider>
      <RouterProvider router={router} />
    </DetailProvider>
  </UserProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
