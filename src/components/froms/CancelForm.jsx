import React from "react";

const CancelForm = ({ phoneNumber, setPhoneNumber, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="space-y-6 p-6 bg-white shadow-lg rounded-lg"
  >
    <div className="space-y-2">
      <label
        htmlFor="phone-cancel"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        id="phone-cancel"
        type="tel"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150 ease-in-out"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:scale-105"
    >
      Cancel Appointment
    </button>
  </form>
);

export default CancelForm;
