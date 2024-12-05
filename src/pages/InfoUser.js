import { useEffect, useRef } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoUser } from "../store/LocationsSlice";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";

const InfoUser = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getInfoUserData } = useSelector((state) => state.LocationsSlice);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getInfoUser(id));
    }
  }, [dispatch ,id]);

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>User Details</h3>
      </div>
      <div className="grid info_details">
        <div className="col-6">
          <div className="title_page">
            {getInfoUserData?.name && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Name</h5>
                <h6>{getInfoUserData.name}</h6>
              </div>
            )}
            {getInfoUserData?.email && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Email</h5>
                <h6>{getInfoUserData.email}</h6>
              </div>
            )}
            {getInfoUserData?.phone && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Phone</h5>
                <h6>{getInfoUserData.phone}</h6>
              </div>
            )}
            {getInfoUserData?.role && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Role</h5>
                <h6>{getInfoUserData.role}</h6>
              </div>
            )}
            {getInfoUserData?.verified !== undefined && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Verified</h5>
                <h6 className={getInfoUserData.verified ? "active" : "noactive"}>
                  {getInfoUserData.verified ? "Yes" : "No"}
                </h6>
              </div>
            )}
            {getInfoUserData?.description && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Description</h5>
                <h6>{getInfoUserData.description}</h6>
              </div>
            )}
            {getInfoUserData?.views !== undefined && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Views</h5>
                <h6>{getInfoUserData.views}</h6>
              </div>
            )}
          </div>
        </div>

        <div className="col-6">
          <div className="title_page">
            {getInfoUserData?.servicesArea?.length > 0 && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Service Area</h5>
                <h6>
                  {getInfoUserData.servicesArea.map(area => area.name.en).join(", ")}
                </h6>
              </div>
            )}
            {getInfoUserData?.createdAt && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Created At</h5>
                <h6>
                  {new Date(getInfoUserData.createdAt).toLocaleDateString()}
                </h6>
              </div>
            )}
            {getInfoUserData?.updatedAt && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Updated At</h5>
                <h6>
                  {new Date(getInfoUserData.updatedAt).toLocaleDateString()}
                </h6>
              </div>
            )}
            {getInfoUserData?.agency?.name && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Agency Name</h5>
                <h6>{getInfoUserData.agency.name}</h6>
              </div>
            )}
            {getInfoUserData?.agency?.description && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Agency Description</h5>
                <h6>{getInfoUserData.agency.description}</h6>
              </div>
            )}
            {getInfoUserData?.agency?.logo && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Agency Logo</h5>
                <h6>
                  <Image
                    src={getInfoUserData.agency.logo?.link}
                    alt="Agency Logo"
                    className="property-thumbnail"
                    width="50"
                    height="50"
                    preview
                  />
                </h6>
              </div>
            )}
            {getInfoUserData?.photo && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Photo</h5>
                <h6>
                  <Image
                    src={getInfoUserData.photo?.link}
                    alt="User Photo"
                    className="property-thumbnail"
                    width="50"
                    height="50"
                    preview
                  />
                </h6>
              </div>
            )}
            {getInfoUserData?.languages?.length > 0 && (
              <div className="flex align-items-center w-100 justify-content-between gap-3">
                <h5>Languages</h5>
                <h6>
                  {getInfoUserData.languages.join(", ")}
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
