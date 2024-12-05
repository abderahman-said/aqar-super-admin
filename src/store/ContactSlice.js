import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./api";

// Async thunk to fetch "getEmirates"
export const getContact = createAsyncThunk(
  "Contact/getContact",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/contact-us");
      return response.data.data.contactUs;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "Contact/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/contact-us/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getNewsletter = createAsyncThunk(
  "Contact/getNewsletter",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/newsletter/subscribers");
      return response.data.data.subscribers;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteNewsletter = createAsyncThunk(
  "Contact/deleteNewsletter",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/newsletter/subscribers/${id}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const Createnewsletter = createAsyncThunk(
  "Contact/Createnewsletter",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/newsletter/send`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getSettings = createAsyncThunk(
  "Contact/getSettings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/settings");
      return response.data.data.settings;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getSubscription = createAsyncThunk(
  "Contact/getSubscription",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/subscriptions/ad-type/${id}`);
      return response.data.data.subscriptions;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteSubscription = createAsyncThunk(
  "Contact/deleteSubscription",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/subscriptions/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTypes = createAsyncThunk(
  "Contact/getTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/add-types");
      return response.data.data.adTypes;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTypes = createAsyncThunk(
  "Contact/createTypes",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/add-types/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to create a new location
export const createTypes = createAsyncThunk(
  "Contact/updateSub",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/add-types", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSub = createAsyncThunk(
  "Contact/createSub",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/subscriptions/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to create a new location
export const createSub = createAsyncThunk(
  "Contact/createSub",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/subscriptions", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateSettings = createAsyncThunk(
  "Contact/updateSettings",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/settings`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const ContactSlice = createSlice({
  name: "Contact",
  initialState: {
    is_Contact_loading: false,
    error: null,
    getContactData: null,
    NewsletterData: null,
    SettingsData: null,
    getSubscriptionData: null,
    getTypesData: null,
  },
  extraReducers: (builder) => {
    builder
      // Handle updateSettings
      .addCase(updateSettings.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
      })
      .addCase(updateSettings.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getContact.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
        state.getContactData = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getTypes.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
        state.getTypesData = action.payload;
      })
      .addCase(getTypes.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getSubscription.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(getSubscription.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
        state.getSubscriptionData = action.payload;
      })
      .addCase(getSubscription.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getNewsletter.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(getNewsletter.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
        state.NewsletterData = action.payload;
      })
      .addCase(getNewsletter.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      })
      // Handle
      .addCase(getSettings.pending, (state) => {
        state.is_Contact_loading = true;
      })
      .addCase(getSettings.fulfilled, (state, action) => {
        state.is_Contact_loading = false;
        state.SettingsData = action.payload;
      })
      .addCase(getSettings.rejected, (state, action) => {
        state.is_Contact_loading = false;
        state.error = action.payload;
      });
  },
});

export default ContactSlice.reducer;
