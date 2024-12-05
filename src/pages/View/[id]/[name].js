import React from "react";
import { Image } from "primereact/image";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertiesAdminDetails } from "../../../components/apiRoutes";
import { useParams } from "react-router-dom";
 import InfoRow from "../InfoRow";

const View = () => {
  const { id } = useParams();
  const { data: PropertiesDetails } = useQuery({
    queryKey: ["PropertiesDetails", id],
    queryFn: () => fetchPropertiesAdminDetails(id),
    enabled: !!id,
  });

  return (
    <div className="container-fluid">
      <div className="grid info_details">
        {/* Left Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <InfoRow label="Name (EN)" value={PropertiesDetails?.title?.en} />
            <InfoRow label="Name (AR)" value={PropertiesDetails?.title?.ar} />
            <InfoRow
              label="Purpose (EN)"
              value={PropertiesDetails?.purpose?.name?.en}
            />
            <InfoRow
              label="Purpose (AR)"
              value={PropertiesDetails?.purpose?.name?.ar}
            />
            <InfoRow
              label="Category"
              value={PropertiesDetails?.category?.name?.en}
            />
            <InfoRow
              label="Commercial Properties"
              value={PropertiesDetails?.commercialProperties?.name?.en}
            />
            <InfoRow
              label="Price"
              value={`${PropertiesDetails?.price} ${PropertiesDetails?.currency?.name?.en}`}
            />
            <InfoRow
              label="Property Type"
              value={PropertiesDetails?.type?.name?.en}
            />
            <InfoRow
              label="Description (EN)"
              value={PropertiesDetails?.description?.en}
            />
            <InfoRow
              label="Description (AR)"
              value={PropertiesDetails?.description?.ar}
            />
            <InfoRow
              label="Customer Payment Method"
              value={PropertiesDetails?.customerPaymentMethod?.name?.en}
            />
            {/* <InfoRow
              label="Commission"
              value={`${PropertiesDetails?.commission}%`}
            /> */}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <InfoRow
              label="Measurement Unit"
              value={PropertiesDetails?.measurement?.name?.en}
            />
            <InfoRow
              label="Advertiser Type"
              value={PropertiesDetails?.advertiserType?.name?.en}
            />
            <InfoRow
              label="Ready"
              value={PropertiesDetails?.ready ? "Yes" : "No"}
              isActive={PropertiesDetails?.ready}
              isBinary
            />
            <InfoRow
              label="Visible"
              value={PropertiesDetails?.visible ? "Yes" : "No"}
              isActive={PropertiesDetails?.visible}
              isBinary
            />
            <InfoRow label="Created At" value={PropertiesDetails?.createdAt} />
            <InfoRow label="Updated At" value={PropertiesDetails?.updatedAt} />
            <InfoRow label="Views" value={PropertiesDetails?.views} />
            <InfoRow
              label="Last Viewed"
              value={new Date(PropertiesDetails?.lastViewed).toLocaleString()}
            />
            <InfoRow
              label="SMS Attempts"
              value={PropertiesDetails?.smsAttempts}
            />
            <InfoRow label="Sharings" value={PropertiesDetails?.sharings} />
            <InfoRow
              label="Call Attempts"
              value={PropertiesDetails?.callAttempts}
            />
            <InfoRow
              label="Favourite Attempts"
              value={PropertiesDetails?.favouriteAttempts}
            />
            <InfoRow
              label="WhatsApp Attempts"
              value={PropertiesDetails?.whatsappAttempts}
            />
          </div>
        </div>

        {/* Additional Details Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <InfoRow label="Rooms" value={PropertiesDetails?.rooms} />
            <InfoRow label="Bathrooms" value={PropertiesDetails?.bathrooms} />
            <InfoRow
              label="Mortgage Eligible"
              value={PropertiesDetails?.mortgageEligible ? "Yes" : "No"}
              isActive={PropertiesDetails?.mortgageEligible}
              isBinary
            />
            <InfoRow
              label="Furnished"
              value={PropertiesDetails?.furnished ? "Yes" : "No"}
              isActive={PropertiesDetails?.furnished}
              isBinary
            />
            <InfoRow
              label="Subscription"
              value={PropertiesDetails?.activeSubscription ? "Yes" : "No"}
              isActive={PropertiesDetails?.activeSubscription}
              isBinary
            />
            <InfoRow label="Floors" value={PropertiesDetails?.floors} />
            <InfoRow label="Space (m²)" value={PropertiesDetails?.space} />
            <InfoRow
              label="Location"
              value={PropertiesDetails?.location
                ?.map((loc) => loc.name.en)
                .join(", ")}
            />
            <InfoRow
              label="Amenities"
              value={PropertiesDetails?.amenities
                ?.map((amenity) => amenity.name.en)
                .join(", ")}
            />
            <InfoRow
              label="Virtual Tour"
              value={
                <a
                  href={PropertiesDetails?.tour}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Tour
                </a>
              }
            />
          </div>
        </div>

        {/* Subscriptions Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <h3>Subscriptions</h3>
            {PropertiesDetails?.subscriptions?.map((sub) => (
              <div key={sub?._id} className="w-100">
                {sub?.subscription?.map((ele) => (
                  <div
                    className="flex d-flex-column w-100 gap-3"
                    key={ele?._id}
                  >
                    <InfoRow label="Name" value={ele?.name?.en} />
                    <InfoRow label="Price" value={ele?.price} />
                  </div>
                ))}
                <InfoRow label="Start Date" value={sub?.startDate} />
                <InfoRow label="End Date" value={sub?.endDate} />
                <InfoRow label="Total Price" value={sub?.price} />
                <InfoRow
                  label="Active"
                  value={sub?.active ? "Active" : "No Active"}
                  isActive={sub?.active}
                  isBinary
                />
              </div>
            ))}
          </div>
        </div>

        {/* Images Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <h3>Images</h3>
            <div className="images-container pt-4">
              {PropertiesDetails?.images?.length > 0 ? (
                PropertiesDetails.images.map((image, index) => (
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

        {/* Videos Column */}
        <div className="col-12 md:col-6 lg:col-6 pb-4">
          <div className="title_page">
            <h3>Videos</h3>
            <div className="grid w-100 video-container">
              {PropertiesDetails?.videos?.length > 0 ? (
                PropertiesDetails.videos.map((video, index) => (
                  <div className="col-12 md:col-6 lg:col-6" key={index}>
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

export default View;
