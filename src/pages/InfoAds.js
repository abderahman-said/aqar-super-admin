import { useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesId } from "../store/LocationsSlice";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
const InfoAds = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getPropertiesIdData } = useSelector((state) => state.LocationsSlice);

  const { id } = useParams();

  useEffect(() => {
    if (!getPropertiesIdData) {
      dispatch(getPropertiesId(id));
    }
  }, [dispatch, getPropertiesIdData, id]);

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Property Details</h3>
      </div>
      <div className="grid info_details">
        {/* Left column with text details */}
        <div className="col-6">
          <div className="title_page">
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Name (EN)</h5>
              <h6>{getPropertiesIdData?.title?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Name (AR)</h5>
              <h6>{getPropertiesIdData?.title?.ar}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Purpose (EN)</h5>
              <h6>{getPropertiesIdData?.purpose?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Purpose (AR)</h5>
              <h6>{getPropertiesIdData?.purpose?.name?.ar}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Category</h5>
              <h6>{getPropertiesIdData?.category?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>commercial Properties</h5>
              <h6>{getPropertiesIdData?.commercialProperties?.name?.en}</h6>
            </div>
            <div className="flex price align-items-center w-100 justify-content-between gap-3">
              <h5>Price</h5>
              <h6>
                <span>{getPropertiesIdData?.price}</span>{" "}
                {getPropertiesIdData?.currency?.name?.en}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Property Type</h5>
              <h6>{getPropertiesIdData?.type?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Description (EN)</h5>
              <h6>{getPropertiesIdData?.description?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Description (AR)</h5>
              <h6>{getPropertiesIdData?.description?.ar}</h6>
            </div>

            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Customer Payment Method</h5>
              <h6>{getPropertiesIdData?.customerPaymentMethod?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Commission</h5>
              <h6>{getPropertiesIdData?.commession}%</h6>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="title_page">
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Measurement Unit</h5>
              <h6>{getPropertiesIdData?.measurement?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Advertiser Type</h5>
              <h6>{getPropertiesIdData?.advertiserType?.name?.en}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>ready</h5>
              <h6
                className={`${
                  getPropertiesIdData?.ready ? "active" : "noactive"
                }`}
              >
                {getPropertiesIdData?.ready ? "Yes" : "No"}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>visible</h5>
              <h6
                className={`${
                  getPropertiesIdData?.visible ? "active" : "noactive"
                }`}
              >
                {getPropertiesIdData?.visible ? "Yes" : "No"}
              </h6>
            </div>

            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>createdAt</h5>
              <h6>{getPropertiesIdData?.createdAt}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>createdAt</h5>
              <h6>{getPropertiesIdData?.updatedAt}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Views</h5>
              <h6>{getPropertiesIdData?.views}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Last Viewed</h5>
              <h6>
                {new Date(getPropertiesIdData?.lastViewed).toLocaleString()}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>SMS Attempts</h5>
              <h6>{getPropertiesIdData?.smsAttempts}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Sharings</h5>
              <h6>{getPropertiesIdData?.sharings}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Call Attempts</h5>
              <h6>{getPropertiesIdData?.callAttempts}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Favourite Attempts</h5>
              <h6>{getPropertiesIdData?.favouriteAttempts}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>WhatsApp Attempts</h5>
              <h6>{getPropertiesIdData?.whatsappAttempts}</h6>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="title_page">
            
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Rooms</h5>
              <h6>{getPropertiesIdData?.rooms}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Bathrooms</h5>
              <h6>{getPropertiesIdData?.bathrooms}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Mortgage Eligible</h5>
              <h6
                className={`${
                  getPropertiesIdData?.mortageEligable ? "active" : "noactive"
                }`}
              >
                {getPropertiesIdData?.mortageEligable ? "Yes" : "No"}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Furnished</h5>
              <h6
                className={`${
                  getPropertiesIdData?.furnished ? "active" : "noactive"
                }`}
              >
                {getPropertiesIdData?.furnished ? "Yes" : "No"}
              </h6>
            </div>
            <div className="flex price align-items-center w-100 justify-content-between gap-3">
              <h5>Subscription</h5>
              <h6
                className={`${
                  getPropertiesIdData?.activeSubscription
                    ? "active"
                    : "noactive"
                }`}
              >
                {getPropertiesIdData?.activeSubscription ? "Yes" : "No"}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Floors</h5>
              <h6>{getPropertiesIdData?.floors}</h6>
            </div>

            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Space (m²)</h5>
              <h6>{getPropertiesIdData?.space}</h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Location</h5>
              <h6>
                {getPropertiesIdData?.location
                  ?.map((loc) => loc.name.en)
                  .join(", ")}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Amenities</h5>
              <h6>
                {getPropertiesIdData?.amenities
                  ?.map((amenity) => amenity.name.en)
                  .join(", ")}
              </h6>
            </div>
            <div className="flex align-items-center w-100 justify-content-between gap-3">
              <h5>Virtual Tour</h5>
              <h6>
                <a
                  href={getPropertiesIdData?.tour}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tour
                </a>
              </h6>
            </div>
          </div>
        </div>
         <div className="col-6">
          <div className="title_page">
            <h3>subscriptions</h3>
            {getPropertiesIdData?.subscriptions?.map((sub) => (
              <div key={sub?._id} className="  w-100">
                {sub?.subscription?.map((ele) => (
                  <>
                    <div className="flex   flex-column w-100   gap-3">
                      <div className="flex align-items-center w-100 justify-content-between gap-3">
                        <h5>name </h5>
                        <h6> {ele?.name?.en}</h6>
                      </div>
                      <div className="flex align-items-center w-100 justify-content-between gap-3">
                        <h5>price </h5>
                        <h6> {ele?.price}</h6>
                      </div>
                    </div>
                  </>
                ))}
                <div className="flex pt-3  flex-column w-100   gap-3">
                  <div className="flex align-items-center w-100 justify-content-between gap-3">
                    <h5>startDate</h5>
                    <h6>{sub?.startDate}</h6>
                  </div>
                  <div className="flex align-items-center w-100 justify-content-between gap-3">
                    <h5>endDate</h5>
                    <h6>{sub?.endDate}</h6>
                  </div>
                  <div className="flex align-items-center w-100 justify-content-between gap-3">
                    <h5>total price </h5>
                    <h6>{sub?.price}</h6>
                  </div>
                  <div className="flex align-items-center w-100 justify-content-between gap-3">
                    <h5> active </h5>
                    <h6 className={`${sub?.active ? "active" : "noactive"}`}>
                      {sub?.active ? "active" : "No active"}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
        <div className="col-6">
          <div className="title_page">
            <h3>Images</h3>
            <div className="images-container pt-4">
              {getPropertiesIdData?.images?.length > 0 ? (
                getPropertiesIdData.images.map((image, index) => (
                  <Image
                    key={index?.link}
                    src={image?.link}
                    alt={`Property image ${index + 1}`}
                    className="property-thumbnail"
                    width="150"
                    height="150"
                    preview
                  />
                ))
              ) : (
                <span>No Images Available</span>
              )}
            </div>
          </div>
        </div>
       
        <div className="col-6">
          <div className="title_page">
            <h3>Videos</h3>
            <div className="grid w-100 video-container">
              {getPropertiesIdData?.videos?.length > 0 ? (
                getPropertiesIdData.videos.map((video, index) => (
                  <div className="col-6" key={index}>
                    <video
                      src={video}
                      controls
                      width="100%"
                      className="video-player"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))
              ) : (
                <span>No Videos Available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAds;
