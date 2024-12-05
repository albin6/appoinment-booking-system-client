import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../api/appoinments";

export const useAppointments = () => {
  return useQuery("appointments", fetchAppointments);
};

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(createAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });
};

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(updateAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });
};

export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries("appointments");
    },
  });
};
