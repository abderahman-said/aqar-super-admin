import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import LocationsSlice from "./LocationsSlice";
import PropertySlice from "./PropertySlice";
import ContactSlice from "./ContactSlice";

export default configureStore({
  reducer: {
    AuthSlice,
    PropertySlice,
    LocationsSlice,
    ContactSlice ,
  },
});
