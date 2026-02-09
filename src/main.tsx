import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryProvider } from "./app/providers/QueryProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
      <ToastContainer />
    </QueryProvider>
  </React.StrictMode>
);
