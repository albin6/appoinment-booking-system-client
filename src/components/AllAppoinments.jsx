import React from "react";

const AllAppointments = ({ appointments }) => {
  return (
    <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        All Appointments
      </h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments scheduled.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment, index) => (
            <li
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <p className="font-medium text-gray-800">
                {appointment.date} at {appointment.time}
              </p>
              <p className="text-gray-600">Phone: {appointment.phoneNumber}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllAppointments;
