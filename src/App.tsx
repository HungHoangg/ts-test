import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, HashRouter, RouterProvider } from "react-router-dom";
import Router, { router } from './routers/routes';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
    // <HashRouter>
    //   {/* <Router /> */}
    // </HashRouter>
  );
}

export default App;
