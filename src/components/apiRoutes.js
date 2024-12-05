import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../store/api";
import { toast } from "react-toastify";

export const fetchAccountDetails = async () => {
  const { data } = await axiosInstance.get(`/agencies/admin/profile`);
  return data.data.user || [];
};
export const fetchaddTypes = async () => {
  const { data } = await axiosInstance.get(`/add-types/`);
  return data.data.adTypes || [];
};
export const fetchEmirates = async () => {
  const { data } = await axiosInstance.get(`/locations/emirates`);
  return data.data.emirates || [];
};
export const fetchStatsDashboard = async () => {
  const { data } = await axiosInstance.get(`/stats/dashboard`);
  return data.data || [];
};
export const useUpload = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/files/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.errors[0] || "Upload failed. Please try again.";
      toast.error(errorMessage);
      console.error("Upload failed:", error);
    },
  });
};

export const useUploadVedio = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post("/files/upload/single/video", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.errors[0] || "Upload failed. Please try again.";
      toast.error(errorMessage);
      console.error("Upload failed:", error);
    },
  });
};
export const useUpdateAgencies = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.put(`/agencies/admin/profile`, data);
      return response.data;
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.errors[0];
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};
export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.put(`/agents/update`, data);
      return response.data;
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.errors[0];
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};
export const useUpdateVisibility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, visibility }) => {
      const response = await axiosInstance.post(`/properties/admin/set-visibility/${id}`, { visibility });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Visibility updated successfully!");
      queryClient.invalidateQueries("PropertiesAdmin");
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.errors[0] || "An error occurred.";
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};
export const fetchPerpose = async () => {
  const { data } = await axiosInstance.get(`/property-properties/types`);
  return data.data.properties || [];
};
export const fetchPropertiesAdmin = async () => {
  const { data } = await axiosInstance.get(`/properties/admin/my-properties`);
  return data.data.properties || [];
};

export const fetchPropertiesAdminDetails = async (id) => {
  const { data } = await axiosInstance.get(`/properties/admin/${id}`);
  return data.data.property || [];
};
export const useCreateProperties = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/properties/admin`, data);
      return response.data;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.errors[0] ||
        "Submission failed. Please try again.";
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};
export const useUpdateProperties = (id) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.put(`/properties/admin/${id}`, data);
      return response.data;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.errors[0] ||
        "Submission failed. Please try again.";
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};

export const UseSubscriptionsAdType = () => {
  return useMutation({
    mutationFn: async (type) => {
      const response = await axiosInstance.get(`/subscriptions/ad-type/${type}`);
      return response.data.data.subscriptions;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.errors[0] ||
        "Submission failed. Please try again.";
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};


export const UsePostsubscriptionsadmin = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/property-subscriptions/admin` , data);
      return response.data.data;
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.errors[0] ||
        "Submission failed. Please try again.";
      toast.error(errorMessage);
      console.error("Submission failed:", error);
    },
  });
};

export const fetchLocationsAddAqar = async (searchQuery) => {
  const response = await axiosInstance.get(
    `/locations/choose-location?query=${searchQuery}`
  );
  return response.data.data.hits;
};

