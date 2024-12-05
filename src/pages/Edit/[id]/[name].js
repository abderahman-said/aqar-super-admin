import React, { useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import {
  fetchPerpose,
  fetchPropertiesAdminDetails,
} from "../../../components/apiRoutes";
import Step1Edit from "../../../components/StepWizardEdit/Step1Edit";
import Step2Edit from "../../../components/StepWizardEdit/Step2Edit";
import Step3Edit from "../../../components/StepWizardEdit/Step3Edit";

function Edit() {
  const { id } = useParams();

  const { data: getPerpose } = useQuery({
    queryKey: ["Perpose"],
    queryFn: fetchPerpose,
  });

  const { data: PropertiesDetails } = useQuery({
    queryKey: ["PropertiesDetails", id],
    queryFn: () => fetchPropertiesAdminDetails(id),
    enabled: !!id,
  });
  const [formData, setFormData] = useState({
    purpose: "",
    category: "",
    commercialProperties: "",
    title: {
      ar: "",
      en: "",
    },
    advertiserType: "",
    price: "",
    currency: "",
    ready: false,
    description: {
      ar: "",
      en: "",
    },
    rooms: 0,
    adType: "",
    bathrooms: 0,
    furnished: false,
    mortageEligable: false,
    floors: 0,
    finishing: "",
    customerPaymentMethod: "",
    addressDetails: {
      ar: "",
      en: "",
    },
    space: 0,
    images: [],
    propertyNumber: "",
    authNumber: "",
    videos: [],
    tour: "HTTPS:",
    amenities: [],
    type: "",
    measurement: "",
    age: 0,
    commession: 0,
    serviceCharge: 0,
    size: 0,
    location: "",
  });
  console.log("formData", formData);

  // Effect to update formData with PropertiesDetails
  useEffect(() => {
    if (PropertiesDetails) {
      setFormData({
        purpose: PropertiesDetails?.purpose._id,
        category: PropertiesDetails?.category._id,
        commercialProperties: PropertiesDetails?.commercialProperties._id,
        adType: PropertiesDetails?.adType,
        title: {
          ar: PropertiesDetails?.title.ar,
          en: PropertiesDetails?.title.en,
        },
        advertiserType: PropertiesDetails?.advertiserType._id,
        price: PropertiesDetails?.price,
        currency: PropertiesDetails?.currency._id,
        ready: PropertiesDetails?.ready,
        description: {
          ar: PropertiesDetails?.description.ar,
          en: PropertiesDetails?.description.en,
        },
        rooms: PropertiesDetails?.rooms,
        bathrooms: PropertiesDetails?.bathrooms,
        furnished: PropertiesDetails?.furnished,
        mortageEligable: PropertiesDetails?.mortageEligable,
        floors: PropertiesDetails?.floors,
        finishing: PropertiesDetails?.finishing._id,
        customerPaymentMethod: PropertiesDetails?.customerPaymentMethod._id,
        addressDetails: {
          ar: PropertiesDetails?.addressDetails.ar,
          en: PropertiesDetails?.addressDetails.en,
        },
        space: PropertiesDetails?.space,
        images: PropertiesDetails?.images,
        authQRCode: PropertiesDetails?.authQRCode,
        propertyNumber: PropertiesDetails?.propertyNumber,
        authNumber: PropertiesDetails?.authNumber,
        videos: PropertiesDetails?.videos,
        tour: PropertiesDetails?.tour,
        amenities: PropertiesDetails?.amenities.map((amenity) => amenity._id),
        type: PropertiesDetails?.type._id,
        measurement: PropertiesDetails?.measurement._id,
        age: PropertiesDetails?.age,
        commession: PropertiesDetails?.commession,
        serviceCharge: PropertiesDetails?.serviceCharge,
        size: PropertiesDetails?.size,
      });
    }
  }, [PropertiesDetails]);

  return (
    <>
      <StepWizard>
        <Step1Edit
          key={`step1-${JSON.stringify(formData)}`}
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
        />

        <Step2Edit
          key={`step2-${JSON.stringify(formData)}`}
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
        />
        <Step3Edit
          key={`step3-${JSON.stringify(formData)}`}
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
          id={id}
          locationView={PropertiesDetails?.location}
        />
      </StepWizard>
    </>
  );
}

export default Edit;
