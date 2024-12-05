import React, { useCallback, useEffect, useRef } from "react";
import styles from "../../styles/addAd.module.css";
import { useState } from "react";

import { MdOutlineCloudUpload } from "react-icons/md";
import { useFormik } from "formik";
import { IoClose } from "react-icons/io5";
import {
  fetchLocationsAddAqar,
  useCreateProperties,
  useUpload,
} from "../../components/apiRoutes";
import { toast } from "react-toastify";

import { useMutation } from "@tanstack/react-query";
import { IoIosClose } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { Image } from "primereact/image";
const useLocations = () => {
  return useMutation({
    mutationFn: fetchLocationsAddAqar,
    onSuccess: () => {},
    onError: (error) => {
      console.error("Upload failed:", error);
    },
  });
};
const Step2 = ({ formData, getPerpose, setFormData, previousStep }) => {
  const { mutate: UploadFiles, } = useUpload();
  const { mutate: createProperties } = useCreateProperties();
  const [locations, setLocations] = useState([]);
  const { mutate: getLocations, data: locationData } = useLocations();
  const resultSearchRef = useRef(null);

  const [selectedLocation, setSelectedLocation] = useState();
  const [images, setImages] = useState([]);
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    const amenities = formik2.values.amenities;

    if (checked) {
      formik2.setFieldValue("amenities", [...amenities, id]);
    } else {
      formik2.setFieldValue(
        "amenities",
        amenities.filter((amenityId) => amenityId !== id)
      );
    }
  };
  console.log("selectedLocation", selectedLocation);
  const formik2 = useFormik({
    initialValues: {
      floors: formData.floors || 0,
      finishing: formData.finishing || "",
      customerPaymentMethod: formData.customerPaymentMethod || "",
      addressDetails: formData.addressDetails || { ar: "", en: "" },
      space: formData.space || 0,
      size: formData.size || 0,
      amenities: formData.amenities || [],
      images: formData.images || [],
      location: formData.location || selectedLocation?._id || "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.size) errors.size = "size is required";
      if (!values.floors) errors.floors = "Number of Floors is required";
      if (!values.finishing)
        errors.finishing = "Finishing selection is required";
      if (!values.customerPaymentMethod)
        errors.customerPaymentMethod = "Payment Method is required";
      if (!values.location) errors.location = "location is required";
      if (!values.addressDetails?.ar)
        errors.addressDetails = { ar: "Property addressDetails is required" };
      if (!values.addressDetails?.en)
        errors.addressDetails = {
          ...errors.addressDetails,
          en: "Property addressDetails is required",
        };

      if (!values.space) errors.space = "Space is required";
      console.log("values", values);
      return errors;
    },
    onSubmit: (values) => {
      const updatedFormData = {
        ...formData,
        ...values,
      };
      setFormData(updatedFormData);

      createProperties(updatedFormData);
      toast.success("The property has been added successfully.");
    },
  });
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    await UploadFiles(formData, {
      onSuccess: (response) => {
        const uploadedFiles = response.data.files;
        const fullPaths = uploadedFiles.map((file) => file.link);
        const ids = uploadedFiles.map((file) => file.id);
        setImages((prevImages) => [...prevImages, ...fullPaths]);
        formik2.setFieldValue("images", [
          ...formik2.values.images,
          ...ids,
        ]);
      },
    });
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    formik2.setFieldValue("images", updatedImages);
  };
  const handleLocationChange = async (event) => {
    const searchQuery = event.target.value;
    getLocations(searchQuery);
  };
  const handleLocationSelect = (location) => {
    console.log("location", location);
    setSelectedLocation(location);
    formik2.setFieldValue("location", location._id);
    setLocations([]);
  };
  const handleClickOutside = useCallback(
    (event) => {
      if (
        resultSearchRef.current &&
        !resultSearchRef.current.contains(event.target)
      ) {
        setLocations([]);
        getLocations();
      }
    },
    [getLocations]
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <form onSubmit={formik2.handleSubmit} className={styles.form_contact_home}>
      <div className="div-flex-co pb-5">
        <h2>Property Info</h2>
        <p className="p-0">Add your property details</p>
      </div>
      <div className="grid">
        <div className="col-12 md:col-12 lg:col-12 ">
          <label htmlFor="Location">
            Location <span>*</span>
          </label>
          <div
            className={`${styles.input_locatin} position-relative ${styles.inout_adv}`}
          >
            <input
              type="text"
              placeholder="enter Location"
              className={`form-control ${styles.formControl}`}
              onChange={handleLocationChange}
            />
            <div className={styles.icon}>
              <GrLocation />
            </div>
            {locationData?.length > 0 && (
              <div ref={resultSearchRef} className={styles.resultSearch}>
                {locationData.map((location) => (
                  <div
                    key={location._id}
                    onClick={() => handleLocationSelect(location)}
                    className={styles.locationItem}
                  >
                    <h6>
                      {location.name.en} <br />
                      <span>
                        (
                        {location.parents
                          ?.map((ele) => ele?.name?.en)
                          .join(", ")}
                        )
                      </span>
                    </h6>
                    {selectedLocation?._id === location._id && <HiBadgeCheck />}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.selectedLocations}>
              {selectedLocation && (
                <div className={styles.selectedLocation}>
                  <span>{selectedLocation.name.en}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedLocation(null)}
                  >
                    <IoIosClose />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="floors">
              Number of Floors <span>*</span>
            </label>
            <input
              name="floors"
              className={styles.input}
              placeholder="add Number of Floors"
              type="number"
              value={formik2.values.floors}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
            />
            {formik2.errors.floors && (
              <small className="p-error">{formik2.errors.floors}</small>
            )}
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="finishing">
              Finishing <span>*</span>
            </label>
            <select
              name="finishing"
              value={formik2.values.finishing}
              onChange={formik2.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Select Finishing</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "finishing") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>

            {formik2.errors.finishing && (
              <small className="p-error">{formik2.errors.finishing}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          <div className={styles.inout_adv}>
            <label htmlFor="customerPaymentMethod">
              Payment Method <span>*</span>
            </label>
            <select
              name="customerPaymentMethod"
              value={formik2.values.customerPaymentMethod}
              onChange={formik2.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Select Payment Method</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "customer-payment-method") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik2.errors.customerPaymentMethod && (
              <small className="p-error">
                {formik2.errors.customerPaymentMethod}
              </small>
            )}
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="addressDetails">
              Address Details EN <span>*</span>
            </label>
            <input
              name="addressDetails.en"
              className={styles.input}
              placeholder="Address details such as: Street / Neighborhood / Compound / Complex.. etc ..."
              type="text"
              value={formik2.values.addressDetails?.en}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
            />
            {formik2.errors.addressDetails?.en && (
              <small className="p-error">
                {formik2.errors.addressDetails?.en}
              </small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="addressDetails">
              Address Details AR <span>*</span>
            </label>
            <input
              name="addressDetails.ar"
              className={styles.input}
              placeholder="Address details such as: Street / Neighborhood / Compound / Complex.. etc ..."
              type="text"
              value={formik2.values.addressDetails?.ar}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
            />
            {formik2.errors.addressDetails?.ar && (
              <small className="p-error">
                {formik2.errors.addressDetails?.ar}
              </small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="space">
              Space <span>*</span>
            </label>
            <input
              name="space"
              className={styles.input}
              placeholder="Enter property size"
              value={formik2.values.space}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              type="number"
            />
            {formik2.errors.space && (
              <small className="p-error">{formik2.errors.space}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="size">
              Size <span>*</span>
            </label>
            <input
              name="size"
              className={styles.input}
              placeholder=""
              type="number"
              value={formik2.values.size}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
            />
            {formik2.errors.size && (
              <small className="p-error">{formik2.errors.size}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          <div className={styles.upLoad}>
            <label htmlFor="image_upload">
              Upload Images <span>*</span>
            </label>
            <div className={styles.image_container}>
              <div id="image_upload" className={styles.image_slot}>
                <MdOutlineCloudUpload />
                Upload img
                <input
                  type="file"
                  id="image_upload"
                  multiple
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          {/* Display Base64 Images */}
          {images.length > 0 && (
            <div className={styles.image_preview}>
              <div className={styles.images_container}>
                {images.map((img, index) => (
                  <div key={index} className={styles.image_preview_item}>
                    <Image
                      src={img} // استخدام `img` الذي هو الرابط
                      alt={`uploaded-${index}`}
                      width={80}
                      height={80}
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className={styles.delete_button}
                    >
                      <IoClose />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          {/* Amenities */}
          <div className="optionsRoom">
            <h3 className="titleOptions">Amenities</h3>
            <div className="scrollMobile">
              <div className="filterCHECKED">
                {getPerpose?.map((ele) => {
                  if (ele.type === "amenity") {
                    return ele.properties?.map((property) => (
                      <div className="checkbox-wrapper-46" key={property._id}>
                        <input
                          type="checkbox"
                          id={property._id}
                          name="amenities"
                          className="inp-cbx"
                          checked={formik2.values.amenities.includes(
                            property._id
                          )}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={property._id} className="cbx">
                          <span>
                            <svg viewBox="0 0 12 10" height="8px" width="10px">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span>{property.name?.en}</span>
                        </label>
                      </div>
                    ));
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4 align-items-center justify-content-between">
        <div onClick={previousStep} className="btn_2">
          Previous
        </div>
        <button type="submit" className="add_btn">
          Next
        </button>
      </div>
    </form>
  );
};
export default Step2;
