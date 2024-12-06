import React from "react";
import { useAppointments } from "../hooks/useAppoinments";
import Loading from "./fallbacks/Loading";
import Error from "./fallbacks/Error";

const AllAppointments = () => {
  const { data: appointments, isLoading, isError } = useAppointments();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        All Appointments
      </h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments scheduled.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="border border-gray-600 p-2 rounded mb-1"
            >
              <p className="font-medium text-gray-800">
                Name : {appointment.name}
              </p>
              <p className="font-medium text-gray-800">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-gray-600">Phone: {appointment.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllAppointments;
