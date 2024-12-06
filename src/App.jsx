import React from "react";
import { ToastContainer } from "react-toastify";
import AppointmentManager from "./components/AppointmentManager";

function App() {
  return (
    <>
      <AppointmentManager />
      <ToastContainer />
    </>
  );
}

export default App;
