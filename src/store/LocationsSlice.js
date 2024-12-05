import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./api";

// Async thunk to fetch "getEmirates"
export const getEmirates = createAsyncThunk(
  "Locations/getEmirates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/locations/emirates");
      return response.data.data.emirates;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to create a new location
export const createLocations = createAsyncThunk(
  "Locations/createLocations",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/locations", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



// Async thunk to fetch children of a specific location
export const getChildrenLocation = createAsyncThunk(
  "Locations/getChildrenLocation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/locations/children/${id}`);
      return response.data.data.regions;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk to fetch children of a specific getUpdateLocation
export const getUpdateLocation = createAsyncThunk(
  "Locations/getUpdateLocation",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/locations/${id}`, data);
      return response.data.data; // Return the updated location data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// =================
export const getLanguages = createAsyncThunk(
  "Locations/getLanguages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/languages");
      return response.data.data.languages;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateLanguages = createAsyncThunk(
  "Locations/updateLanguages",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/languages/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createLanguages = createAsyncThunk(
  "Locations/createLanguages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/Languages", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteLang = createAsyncThunk(
  "Locations/deleteLang",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/languages/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ==========================
export const getSpciality = createAsyncThunk(
  "Locations/getSpciality",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/specialities");
      return response.data.data.speciality;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSpciality = createAsyncThunk(
  "Locations/updateSpciality",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/specialities/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createSpciality = createAsyncThunk(
  "Locations/createSpciality",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/specialities", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteSpciality = createAsyncThunk(
  "Locations/deleteSpciality",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/specialities/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// ==========================
export const getAgents = createAsyncThunk(
  "Locations/getAgents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/agents");
      return response.data.data.agents;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getAgencies = createAsyncThunk(
  "Locations/getAgencies",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/agencies?&limit=${limit}`);
      return response.data.data.agencies;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProperties = createAsyncThunk(
  "Locations/getProperties",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/properties/admin?page=${page}&limit=${limit}&agency=&type=&purpose=&emirate=&location=&minPrice=&maxPrice=&rooms=&bathrooms=&minSize=&maxSize=&amenities=&owner=&keywords=&finishing=&ready=&agent=&locations=&sort=`
      );
      return response.data.data.properties;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getPropertiesId = createAsyncThunk(
  "Locations/getPropertiesId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/properties/admin/${id}`);
      return response.data.data.property;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getInfoUser = createAsyncThunk(
  "Locations/getInfoUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/auth/admin/account/${id}`);
      return response.data.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getDeleteProperties = createAsyncThunk(
  "Locations/getDeleteProperties",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/properties/admin/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getPropertiesAdmin = createAsyncThunk(
  "Locations/getPropertiesAdmin",
  async ({ page, limit, state }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/properties/admin?agency=&type=&purpose=&deleted=${state}&emirate=&location=&minPrice=&maxPrice=&rooms=&bathrooms=&minSize=&maxSize=&amenities=&owner=&keywords=&finishing=&ready=&agent=&page=${page}&limit=${limit}&locations=&sort=`
      );
      return response.data.data.properties;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getRestoreProperties = createAsyncThunk(
  "Locations/getRestoreProperties",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/properties/admin/restore/${id}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDeleteUser = createAsyncThunk(
  "Locations/getDeleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/auth/admin/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getadmins = createAsyncThunk(
  "Locations/getadmins",
  async ({ limit, page ,state }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/admins?limit=${limit}&page=${page}&deleted=${state}`
      );
      return response.data.data.admins;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk to create a new location
export const createadmins = createAsyncThunk(
  "Locations/createadmins",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/admins/create", data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk to fetch children of a specific getUpdateLocation
export const updateAdmins = createAsyncThunk(
  "Locations/updateAdmins",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/auth/admin/admin/${id}`, data);
      return response.data.data; // Return the updated location data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Updated async thunk with pagination parameters
export const getRealEstateFinances = createAsyncThunk(
  "Locations/getRealEstateFinances",
  async ({ page, limit , status }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/fundraising-requests?limit=${limit}&page=${page}&status=${status}`
      );
      return response.data.data.fundraisingRequests;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch children of a specific location
export const getFundraisingId = createAsyncThunk(
  "Locations/getFundraisingId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/fundraising-requests/${id}`);
      return response.data.data.fundraisingRequest;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Async thunk to fetch children of a specific getUpdateLocation
export const getUpdateRealEstateFinance = createAsyncThunk(
  "Locations/getUpdateRealEstateFinance",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/fundraising-requests/${id}`, data);
      return response.data.data; // Return the updated location data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteRealEstateFinance = createAsyncThunk(
  "Locations/deleteRealEstateFinance",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/fundraising-requests/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const LocationsSlice = createSlice({
  name: "Locations",
  initialState: {
    is_Locations_loading: false,
    error: null,
    getEmiratesData: null,
    getFundraisingIdData: null,
    getRealEstateFinancesData: null,
    getChildrenLocationData: null,
    getLanguagesData: null,
    getSpcialityData: null,
    getAgentsData: null,
    getAgenciesData: null,
    getPropertiesData: null,
    getPropertiesIdData: null,
    getPropertiesAdminData: null,
    getInfoUserData: null,
    getadminsData: null,
  },
  extraReducers: (builder) => {
    builder
     // Handle getEmirates
     .addCase(getFundraisingId.pending, (state) => {
      state.is_Locations_loading = true;
    })
    .addCase(getFundraisingId.fulfilled, (state, action) => {
      state.is_Locations_loading = false;
      state.getFundraisingIdData = action.payload;
    })
    .addCase(getFundraisingId.rejected, (state, action) => {
      state.is_Locations_loading = false;
      state.error = action.payload;
    })
      // Handle getEmirates
      .addCase(getRealEstateFinances.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getRealEstateFinances.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getRealEstateFinancesData = action.payload;
      })
      .addCase(getRealEstateFinances.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getPropertiesAdmin.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getPropertiesAdmin.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getPropertiesAdminData = action.payload;
      })
      .addCase(getPropertiesAdmin.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getadmins.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getadmins.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getadminsData = action.payload;
      })
      .addCase(getadmins.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getInfoUser.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getInfoUserData = action.payload;
      })
      .addCase(getInfoUser.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getEmirates.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getEmirates.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getEmiratesData = action.payload;
      })
      .addCase(getEmirates.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getPropertiesIdData
      .addCase(getPropertiesId.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getPropertiesId.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getPropertiesIdData = action.payload;
      })
      .addCase(getPropertiesId.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getProperties
      .addCase(getProperties.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getProperties.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getPropertiesData = action.payload;
      })
      .addCase(getProperties.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getAgencies.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getAgencies.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getAgenciesData = action.payload;
      })
      .addCase(getAgencies.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getAgents.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getAgents.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getAgentsData = action.payload;
      })
      .addCase(getAgents.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle createLocations
      .addCase(createLocations.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(createLocations.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
      })
      .addCase(createLocations.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })

      // Handle getEmirates
      .addCase(getLanguages.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getLanguagesData = action.payload;
      })
      .addCase(getLanguages.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getEmirates
      .addCase(getSpciality.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getSpciality.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getSpcialityData = action.payload;
      })
      .addCase(getSpciality.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      })
      // Handle getChildrenLocation
      .addCase(getChildrenLocation.pending, (state) => {
        state.is_Locations_loading = true;
      })
      .addCase(getChildrenLocation.fulfilled, (state, action) => {
        state.is_Locations_loading = false;
        state.getChildrenLocationData = action.payload;
      })
      .addCase(getChildrenLocation.rejected, (state, action) => {
        state.is_Locations_loading = false;
        state.error = action.payload;
      });
  },
});

export default LocationsSlice.reducer;
