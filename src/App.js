import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/layouts/loading/loading";
import React, { Suspense } from "react";
import "./styles/style.css";
const Login = React.lazy(() => import("./pages/auth/login"));
const Protected = React.lazy(() => import("./pages/auth/Protected"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Location = React.lazy(() => import("./pages/Location"));
const Region = React.lazy(() => import("./pages/Region"));
const Languages = React.lazy(() => import("./pages/Languages"));
const Spciality = React.lazy(() => import("./pages/Spciality"));
const Properties = React.lazy(() => import("./pages/property/Properties"));
const Contacts = React.lazy(() => import("./pages/Contacts"));
const Newsletter = React.lazy(() => import("./pages/Newsletter"));
const Setting = React.lazy(() => import("./pages/Setting"));
const Subscription = React.lazy(() => import("./pages/Subscription"));
const AddType = React.lazy(() => import("./pages/AddType"));
const Agents = React.lazy(() => import("./pages/Agents"));
const Agencies = React.lazy(() => import("./pages/Agencies"));
const Ads = React.lazy(() => import("./pages/Ads"));
const InfoAds = React.lazy(() => import("./pages/InfoAds"));
const MyProfile = React.lazy(() => import("./pages/MyProfile"));
const MyDeleted = React.lazy(() => import("./pages/MyDeleted"));
const InfoUser = React.lazy(() => import("./pages/InfoUser"));
const Admins = React.lazy(() => import("./pages/Admins"));
const AdsAqar = React.lazy(() => import("./pages/AdsAqar"));
const View = React.lazy(() => import("./pages/View/[id]/[name]"));
const AddAd = React.lazy(() => import("./pages/addAd"));
const Edit = React.lazy(() => import("./pages/Edit/[id]/[name]"));
const RealEstateFinance = React.lazy(() => import("./pages/RealEstateFinance"));
const ViewRealEstateFinance = React.lazy(() =>
  import("./pages/ViewRealEstateFinance")
);

function App() {
  const { isAuthLoading } = useSelector((state) => state.AuthSlice);
  const { is_Locations_loading } = useSelector((state) => state.LocationsSlice);
  const { is_Contact_loading } = useSelector((state) => state.ContactSlice);
  const { is_Property_loading } = useSelector((state) => state.PropertySlice);
  return (
    <>
      {isAuthLoading && <Loader />}
      {is_Locations_loading && <Loader />}
      {is_Property_loading && <Loader />}
      {is_Contact_loading && <Loader />}

      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Trainers */}
          <Route element={<Protected />}>
            <Route path="*" element={<Dashboard />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Region/:id" element={<Region />} />
            <Route path="/Languages" element={<Languages />} />
            <Route path="/Spciality" element={<Spciality />} />
            <Route path="/Properties" element={<Properties />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Newsletter" element={<Newsletter />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Subscription/:id" element={<Subscription />} />
            <Route path="/AddType" element={<AddType />} />
            <Route path="/Agents" element={<Agents />} />
            <Route path="/Agencies" element={<Agencies />} />
            <Route path="/Ads" element={<Ads />} />
            <Route path="/InfoAds/:id" element={<InfoAds />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/MyDeleted" element={<MyDeleted />} />
            <Route path="/InfoUser/:id" element={<InfoUser />} />
            <Route path="/Admins" element={<Admins />} />
            <Route path="/AdsAqar" element={<AdsAqar />} />
            <Route path="/addAd" element={<AddAd />} />
            <Route path="/RealEstateFinance" element={<RealEstateFinance />} />
            <Route
              path="/ViewRealEstateFinance/:id/"
              element={<ViewRealEstateFinance />}
            />

            <Route path="/View/:id/:name" element={<View />} />
            <Route path="/Edit/:id/:name" element={<Edit />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
