import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Navbar from './USER/navbar/Navbar';
import Footer from './USER/Footer/Footer';
// import Layout from "./Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

   
      <Navbar/>
        <App />
        <Toaster />
        <Footer />
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
