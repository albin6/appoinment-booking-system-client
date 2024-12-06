import React from "react";

const ModifyForm = ({
  fullName,
  setFullName,
  phoneNumber,
  setPhoneNumber,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => (
  <form
    onSubmit={handleSubmit}
    className="space-y-6 p-6 bg-white shadow-lg rounded-lg"
  >
    <div>
      <label
        htmlFor="name-modify"
        className="block text-sm font-medium text-gray-700"
      >
        Full Name
      </label>
      <input
        id="name-modify"
        type="name"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
    </div>
    <div>
      <label
        htmlFor="phone-modify"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        id="phone-modify"
        type="tel"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
    </div>
    <div>
      <label
        htmlFor="date-modify"
        className="block text-sm font-medium text-gray-700"
      >
        New Date
      </label>
      <input
        id="date-modify"
        type="date"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>
    <div>
      <label
        htmlFor="time-modify"
        className="block text-sm font-medium text-gray-700"
      >
        New Time
      </label>
      <input
        id="time-modify"
        type="time"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out transform hover:scale-105"
    >
      Modify Appointment
    </button>
  </form>
);

export default ModifyForm;
