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
import { toast } from "react-toastify";

const AppointmentManager = () => {
  const { mutate: createAppointment } = useCreateAppointment();
  const { mutate: updateAppointment } = useUpdateAppointment();
  const { mutate: deleteAppoinment } = useDeleteAppointment();
  const [activeTab, setActiveTab] = useState("book");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  };

  const validateDate = (dateString) => {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate > today;
  };

  const validateTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours >= 9 && hours < 18;
  };

  const validateFields = (fields) => {
    return fields.every((field) => field.trim() !== "");
  };

  const handleBookAppointment = (e) => {
    e.preventDefault();
    if (!validateFields([fullName, phoneNumber, date, time])) {
      toast.error("All fields are required");
      return;
    }
    if (!validateName(fullName)) {
      toast.error("Name should only contain English letters");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number. Please enter a 10-digit number.");
      return;
    }
    if (!validateDate(date)) {
      toast.error("Please select a future date");
      return;
    }
    if (!validateTime(time)) {
      toast.error("Please select a time between 9:00 AM and 6:00 PM");
      return;
    }
    const newAppointment = { name: fullName, phone: phoneNumber, date, time };
    createAppointment(newAppointment, {
      onSuccess: () => toast.success("Appointment Added"),
      onError: () => toast.error("Something Went wrong"),
    });
    setFullName("");
    setPhoneNumber("");
    setDate("");
    setTime("");
  };

  const handleModifyAppointment = (e) => {
    e.preventDefault();
    if (!validateFields([fullName, phoneNumber, date, time])) {
      toast.error("All fields are required");
      return;
    }
    if (!validateName(fullName)) {
      toast.error("Name should only contain English letters");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number. Please enter a 10-digit number.");
      return;
    }
    if (!validateDate(date)) {
      toast.error("Please select a future date");
      return;
    }
    if (!validateTime(time)) {
      toast.error("Please select a time between 9:00 AM and 6:00 PM");
      return;
    }
    updateAppointment(
      {
        phone: phoneNumber,
        data: {
          name: fullName,
          phone: phoneNumber,
          date,
          time,
        },
      },
      {
        onSuccess: () => toast.success("Appointment Updated"),
        onError: () => toast.error("Something Went wrong"),
      }
    );
    setFullName("");
    setPhoneNumber("");
    setDate("");
    setTime("");
  };

  const handleCancelAppointment = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Invalid phone number. Please enter a 10-digit number.");
      return;
    }
    deleteAppoinment(phoneNumber, {
      onSuccess: () => toast.success("Appointment Deleted"),
      onError: () => toast.error("Something Went wrong"),
    });
    setPhoneNumber("");
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
