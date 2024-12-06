import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import BookForm from "./froms/BookForm";
import ModifyForm from "./froms/ModifyForm";
import CancelForm from "./froms/CancelForm";
import AllAppointments from "./AllAppointments";
import {
  useCreateAppointment,
  useDeleteAppointment,
  useUpdateAppointment,
} from "../hooks/useAppoinments";

const AppointmentManager = () => {
  const { mutate: createAppointment } = useCreateAppointment();
  const { mutate: updateAppointment } = useUpdateAppointment();
  const { mutate: deleteAppoinment } = useDeleteAppointment();
  const [activeTab, setActiveTab] = useState("book");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = { name: fullName, phone: phoneNumber, date, time };
    createAppointment(newAppointment);
    setFullName("");
    setPhoneNumber("");
    setDate("");
    setTime("");
  };

  const handleModifyAppointment = (e) => {
    e.preventDefault();
    updateAppointment({
      phoneNumber,
      data: {
        name: fullName,
        phone: phoneNumber,
        date,
        time,
      },
    });
  };

  const handleCancelAppointment = (e) => {
    e.preventDefault();
    deleteAppoinment(phoneNumber);
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
            fullName={fullName}
            setFullName={setFullName}
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

        {activeTab === "all" && <AllAppointments />}
      </div>
    </div>
  );
};

export default AppointmentManager;
