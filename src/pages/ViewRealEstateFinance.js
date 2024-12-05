import { useEffect, useRef } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFundraisingId } from "../store/LocationsSlice";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";

const InfoUser = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getFundraisingIdData } = useSelector((state) => state.LocationsSlice);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getFundraisingId(id));
    }
  }, [dispatch, id]);

  // Render field if it exists
  const renderField = (label, value) => {
    if (value !== undefined && value !== null) {
      return (
        <div className="flex align-items-center w-100 justify-content-between gap-3">
          <h5>{label}</h5>
          <h6>{value}</h6>
        </div>
      );
    }
    return null;
  };
  const renderLocations = (locations) => {
    if (locations && locations.length > 0) {
      return (
        <div className="flex  w-100 justify-content-between ">
          {locations.map((location) => (
            <div key={location._id} className="flex flex-column gap-2">
              <h5>Locations</h5>{" "}
              <div className="flex align-items-center gap-3">
                <h6 className="text-sm">{location.name.en}</h6> {/* English name */}
                <h6 className="text-sm">{location.name.ar}</h6> {/* Arabic name */}
              </div>
              {location.parents && location.parents.length > 0 && (
                <div className="flex flex-column gap-2">
                  <h6>Parents:</h6>
                  {location.parents.map((parent) => (
                    <div
                      key={parent._id}
                      className="flex align-items-center gap-3"
                    >
                      <span className="text-sm">{parent.name.en}</span>   
                      <span className="text-sm">{parent.name.ar}</span>  
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Real Estate Finances Details</h3>
      </div>
      <div className="grid info_details">
        <div className="col-6">
          <div className="title_page">
            {renderField("Name", getFundraisingIdData?.name)}
            {renderField("Email", getFundraisingIdData?.email)}
            {renderField("Phone", getFundraisingIdData?.phone)}
            {renderField("Status", getFundraisingIdData?.status)}
            {renderField("Type", getFundraisingIdData?.type)}
            {renderField("Stage", getFundraisingIdData?.stage)}
            {renderField("Purchase Time", getFundraisingIdData?.purchaseTime)}
            {renderField("Property Type", getFundraisingIdData?.propertyType)}
            {renderField(
              "Property Status",
              getFundraisingIdData?.propertyStatus
            )}
          </div>
        </div>

        <div className="col-6">
          <div className="title_page">
            {renderField("budget", getFundraisingIdData?.budget)}
            {renderField(
              "initial Payment Percentage",
              getFundraisingIdData?.initialPaymentPercentage
            )}
            {renderField("birthyear", getFundraisingIdData?.birthyear)}
            {renderField(
              "employment Situation",
              getFundraisingIdData?.employmentSituation
            )}
            {renderField("mortageType", getFundraisingIdData?.mortageType)}
            {renderField("totalIncome", getFundraisingIdData?.totalIncome)}
            {renderField(
              "monthly Repayments",
              getFundraisingIdData?.monthlyRepayments
            )}
            {renderField(
              "Created At",
              getFundraisingIdData?.createdAt &&
                new Date(getFundraisingIdData.createdAt).toLocaleDateString()
            )}
            {renderField(
              "Updated At",
              getFundraisingIdData?.updatedAt &&
                new Date(getFundraisingIdData.updatedAt).toLocaleDateString()
            )}
          </div>
        </div>

        <div className="col-12">
          <div className="title_page">
            {renderLocations(getFundraisingIdData?.locations)} {/* Locations */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
