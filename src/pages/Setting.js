import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
import { getSettings } from "../store/ContactSlice";
const SettingsEdit = React.lazy(() =>
  import("../components/locations/SettingsEdit")
);

const Setting = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { SettingsData } = useSelector((state) => state.ContactSlice);
  const [visible, setVisible] = useState(false);
  const [selectedSpciality, setselectedSpciality] = useState(null);

  useEffect(() => {
    if (!SettingsData) {
      dispatch(getSettings());
    }
  }, [dispatch, SettingsData]);

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Settings</h3>
        <button
          className="add_btn"
          onClick={() => {
            setselectedSpciality(SettingsData);
            setVisible(true);
          }}
        >
          <FiEdit />
          Edit Settings
        </button>
      </div>
      <div className="grid info_details">
        {/* Left column with text details */}
        <div className="col-6">
          <div className="title_page title_page block">
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Name (EN)</h5>
              <h6>{SettingsData?.appName}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>app Description</h5>
              <h6>{SettingsData?.appDescription}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>keywords</h5>
              <h6>{SettingsData?.seo?.keywords}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Location</h5>
              <h6>{SettingsData?.location}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Email</h5>
              <h6>{SettingsData?.email}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Phone</h5>
              <h6>{SettingsData?.phone}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>CopyRight</h5>
              <h6>{SettingsData?.copyRight}</h6>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="title_page block">
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Instagram</h5>
              <h6>{SettingsData?.socialMedia?.instagram}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>WhatsApp</h5>
              <h6>{SettingsData?.socialMedia?.whatsapp}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Facebook</h5>
              <h6>{SettingsData?.socialMedia?.facebook}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Twitter</h5>
              <h6>{SettingsData?.socialMedia?.twitter}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Telegram</h5>
              <h6>{SettingsData?.socialMedia?.telegram}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Hero Video Link</h5>
              <h6>
                <a
                  href={SettingsData?.heroVideo?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>App Logo</h5>
              <img
                src={SettingsData?.appLogo?.link}
                alt="App Logo"
                width="100"
              />
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <SettingsEdit
          visible={visible}
          setVisible={setVisible}
          selectedSpciality={selectedSpciality}
        />
      </Suspense>
    </div>
  );
};

export default Setting;
