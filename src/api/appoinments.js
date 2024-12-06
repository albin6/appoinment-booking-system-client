import client from "./clients";

// Fetch all appointments
export const fetchAppointments = async () => {
  const response = await client.get("/appointments");
  return response.data;
};

// Create a new appointment
export const createAppointment = async (data) => {
  const response = await client.post("/appointments", data);
  return response.data;
};

// Update an appointment
export const updateAppointment = async ({ phone, data }) => {
  const response = await client.put(`/appointments/${phone}`, data);
  return response.data;
};

// Delete an appointment
export const deleteAppointment = async (phone) => {
  const response = await client.delete(`/appointments/${phone}`);
  return response.data;
};
