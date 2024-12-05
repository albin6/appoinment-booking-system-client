import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import BookForm from "./froms/BookForm";
import ModifyForm from "./froms/ModifyForm";
import CancelForm from "./froms/CancelForm";
import AllAppointments from "./AllAppoinments";

const AppointmentManager = () => {
  const [activeTab, setActiveTab] = useState("book");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [appointments, setAppointments] = useState([
    { phoneNumber: "123-456-7890", date: "2023-05-15", time: "10:00" },
    { phoneNumber: "098-765-4321", date: "2023-05-16", time: "14:30" },
  ]);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = { phoneNumber, date, time };
    setAppointments([...appointments, newAppointment]);
    console.log("Booking appointment:", newAppointment);
    alert(`Appointment booked for ${date} at ${time}`);
    setPhoneNumber("");
    setDate("");
    setTime("");
  };

  const handleModifyAppointment = (e) => {
    e.preventDefault();
    console.log("Modifying appointment:", { phoneNumber, date, time });
    alert(`Appointment modified for ${date} at ${time}`);
  };

  const handleCancelAppointment = (e) => {
    e.preventDefault();
    console.log("Canceling appointment:", { phoneNumber });
    alert("Appointment canceled");
  };

  return (
    <div className="max-w-xl w-full mx-auto mt-24 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Appointment Manager
      </h1>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "book" && (
          <BookForm
            fullName={fullName}
            setFullName={setFullName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleSubmit={handleBookAppointment}
          />
        )}

        {activeTab === "modify" && (
          <ModifyForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            handleSubmit={handleModifyAppointment}
          />
        )}

        {activeTab === "cancel" && (
          <CancelForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleSubmit={handleCancelAppointment}
          />
        )}

        {activeTab === "all" && <AllAppointments appointments={appointments} />}
      </div>
    </div>
  );
};

export default AppointmentManager;
