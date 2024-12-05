import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { fetchPerpose } from "../components/apiRoutes";
import { useQuery } from "@tanstack/react-query";
import Step1 from "../components/StepWizard/Step1";
import Step2 from "../components/StepWizard/Step2";
import Step3 from "../components/StepWizard/Step3";

function AddAd() {
  const { data: getPerpose } = useQuery({
    queryKey: ["Perpose"],
    queryFn: fetchPerpose,
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
    adType: "",
    authQRCode: "",
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
  return (
    <>
      <StepWizard>
        <Step1
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
        />
        <Step2
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
        />
        <Step3
          formData={formData}
          getPerpose={getPerpose}
          setFormData={setFormData}
        />
      </StepWizard>
    </>
  );
}
export default AddAd;
