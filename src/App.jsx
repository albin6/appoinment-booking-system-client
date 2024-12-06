import React from "react";
import { ToastContainer } from "react-toastify";
import AppointmentManager from "./components/AppointmentManager";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppointmentManager />
      <ToastContainer />
    </>
  );
}

export default App;
