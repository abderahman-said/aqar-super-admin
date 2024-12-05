import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./api";

// Async thunk to fetch "getEmirates"
export const getPropertiesGrop = createAsyncThunk(
  "Property/getPropertiesGrop",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/property-properties/types");
      return response.data.data.properties;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deletePropertiesGrop = createAsyncThunk(
  "Property/deletePropertiesGrop",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/property-properties/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updatePropertiesGrop = createAsyncThunk(
  "Property/updatePropertiesGrop",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/property-properties/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const createPropertiesGrop = createAsyncThunk(
  "Property/createPropertiesGrop",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/property-properties", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProfile = createAsyncThunk(
  "Property/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/agencies/admin/profile");
      return response.data.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAgentsAdminDeleted = createAsyncThunk(
  "Property/getAgentsAdminDeleted",
  async ({ page , state }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/agents?page=${page}&deleted=${state}`
      );
      return response.data.data.agents;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAgenciesDeleted = createAsyncThunk(
  "Property/getAgenciesDeleted",
  async ({ page , state }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/agencies?page=${page}&deleted=${state}`
      );
      return response.data.data.agencies;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "Property/updateUser",
  async ({ type , id , data}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/auth/admin/${type}/${id}`  ,data
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const RestoreUser = createAsyncThunk(
  "Property/RestoreUser",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/auth/admin/restore/${_id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const PropertySlice = createSlice({
  name: "Property",
  initialState: {
    is_Property_loading: false,
    error: null,
    getPropertiesGropData: null,
    getProfileData: null,
    getAgentsAdminDeletedData: null,
    getAgenciesDeletedData: null,
  },
  extraReducers: (builder) => {
    builder
      // Handle getEmirates
      .addCase(getPropertiesGrop.pending, (state) => {
        state.is_Property_loading = true;
      })
      .addCase(getPropertiesGrop.fulfilled, (state, action) => {
        state.is_Property_loading = false;
        state.getPropertiesGropData = action.payload;
      })
      .addCase(getPropertiesGrop.rejected, (state, action) => {
        state.is_Property_loading = false;
        state.error = action.payload;
      })
       // Handle getEmirates
       .addCase(getAgenciesDeleted.pending, (state) => {
        state.is_Property_loading = true;
      })
      .addCase(getAgenciesDeleted.fulfilled, (state, action) => {
        state.is_Property_loading = false;
        state.getAgenciesDeletedData = action.payload;
      })
      .addCase(getAgenciesDeleted.rejected, (state, action) => {
        state.is_Property_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getAgentsAdminDeleted.pending, (state) => {
        state.is_Property_loading = true;
      })
      .addCase(getAgentsAdminDeleted.fulfilled, (state, action) => {
        state.is_Property_loading = false;
        state.getAgentsAdminDeletedData = action.payload;
      })
      .addCase(getAgentsAdminDeleted.rejected, (state, action) => {
        state.is_Property_loading = false;
        state.error = action.payload;
      })
      // Handle getProfile
      .addCase(getProfile.pending, (state) => {
        state.is_Property_loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.is_Property_loading = false;
        state.getProfileData = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.is_Property_loading = false;
        state.error = action.payload;
      })
  },
});

export default PropertySlice.reducer;
