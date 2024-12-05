import React, { useCallback, useState } from "react";
import styles from "../../styles/addAd.module.css";
import { useFormik } from "formik";
import { useUpload } from "../../components/apiRoutes";
import ImageUpload from "../ImageUpload";

const Step2 = ({
  formData,
  getPerpose,
  setFormData,
  previousStep,
  nextStep,
}) => {
  const { mutate: UploadFiles } = useUpload();
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState(null);

  const formik2 = useFormik({
    initialValues: {
      description: formData.description || { ar: "", en: "" },
      size: formData.size || 0,
      rooms: formData.rooms || 0,
      bathrooms: formData.bathrooms || 0,
      age: formData.age || 0,
      serviceCharge: formData.serviceCharge || "",
      furnished: formData.furnished || false,
      mortageEligable: formData.mortageEligable || false,
      authQRCode: formData.authQRCode || "",
      propertyNumber: formData.propertyNumber || "",
      authNumber: formData.authNumber || "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.description?.ar) {
        errors.description = {
          ar: "Property Description in Arabic is required",
        };
      }
      if (!values.description?.en) {
        errors.description = {
          ...errors.description,
          en: "Property Description in English is required",
        };
      }
      if (!values.authNumber) errors.authNumber = "auth Number is required";
      if (!values.propertyNumber)
        errors.propertyNumber = "property Number is required";
      if (!values.authQRCode) errors.authQRCode = "auth QRCode is required";

      if (!values.rooms) errors.rooms = "rooms is required";
      if (!values.bathrooms) errors.bathrooms = "bathrooms is required";
      if (!values.size) errors.size = "Area is required";
      if (!values.age) errors.age = "Property Age is required";
      if (!values.serviceCharge)
        errors.serviceCharge = "Service Charge is required";
      if (typeof values.furnished !== "boolean") {
        errors.furnished = "furnished selection is required";
      }
      if (typeof values.mortageEligable !== "boolean") {
        errors.mortageEligable = "Mortgage Eligibility is required";
      }
console.log("errors" ,errors)
      return errors;
    },
    onSubmit: (values) => {
      const updatedFormData = {
        ...formData,
        ...values,
      };
      setFormData(updatedFormData);
      nextStep();
    },
  });
  const handleImageUpload = useCallback(
    async (e) => {
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("files", file);
        await UploadFiles(formData, {
          onSuccess: (response) => {
            const uploadedFile = response.data.files[0];
            setImage(uploadedFile.link);
            formik2.setFieldValue("authQRCode", uploadedFile.id);
          },
        });
      }
    },
    [UploadFiles, formik2]
  );
  const handleDeleteImageValue = useCallback(() => {}, []);

  const handleDeleteImage = useCallback(() => {
    setImage(null);
    formik2.setFieldValue("authQRCode", "");
  }, [formik2]);
  
  return (
    <form onSubmit={formik2.handleSubmit} className={styles.form_contact_home}>
      <div className="div-flex-co pb-5">
        <h2>Property Info</h2>
        <p className="p-0">Add your property details</p>
      </div>
      <div className="grid ">
        {/* Property Description */}
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className={`${styles.inout_icon_textarea} ${styles.inout_icon_div}`}
          >
            <label htmlFor="property-description">
              Property Description EN <span>*</span>
            </label>
            <textarea
              name="description.en"
              placeholder="Complete description of the property..."
              rows="4"
              id="property-description"
              className="text_area"
              value={formik2.values.description.en}
              onChange={formik2.handleChange}
            />
            {formik2.errors.description?.en && (
              <small className="p-error">{formik2.errors.description.en}</small>
            )}
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-6">
          <div
            className={`${styles.inout_icon_textarea} ${styles.inout_icon_div}`}
          >
            <label htmlFor="property-description-ar">
              Property Description AR <span>*</span>
            </label>
            <textarea
              name="description.ar"
              placeholder="Complete description of the property..."
              rows="4"
              id="property-description-ar"
              className="text_area"
              value={formik2.values.description.ar}
              onChange={formik2.handleChange}
            />
            {formik2.errors.description?.ar && (
              <small className="p-error">{formik2.errors.description.ar}</small>
            )}
          </div>
        </div>

        {/* Area */}
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="area">
              Add Area <span>*</span>
            </label>
            <input
              name="size"
              type="number"
              min="0"
              placeholder="Add Area"
              value={formik2.values.size}
              onChange={formik2.handleChange}
            />
            {formik2.errors.size && (
              <small className="p-error">{formik2.errors.size}</small>
            )}
          </div>
        </div>

        {/* Permit Number */}
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="rooms">
              Number of rooms <span>*</span>
            </label>
            <input
              name="rooms"
              className={styles.input}
              placeholder=" "
              type="number"
              value={formik2.values.rooms}
              onChange={formik2.handleChange}
            />
            {formik2.errors.rooms && (
              <small className="p-error">{formik2.errors.rooms}</small>
            )}
          </div>
        </div>
        {/* Permit Number */}
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="bathrooms">
              Number of bathrooms <span>*</span>
            </label>
            <input
              name="bathrooms"
              className={styles.input}
              placeholder=" "
              type="number"
              value={formik2.values.bathrooms}
              onChange={formik2.handleChange}
            />
            {formik2.errors.bathrooms && (
              <small className="p-error">{formik2.errors.bathrooms}</small>
            )}
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="age">
              Property Age<span>*</span>
            </label>
            <input
              name="age"
              className={styles.input}
              placeholder=" "
              type="number"
              value={formik2.values.age} // Ensure it's using formik2.values.age
              onChange={formik2.handleChange} // Correctly update formik2 state
            />
            {formik2.errors.age && (
              <small className="p-error">{formik2.errors.age}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <div className={styles.inout_adv}>
            <label htmlFor="serviceCharge">
              Service Charge<span>*</span>
            </label>
            <input
              name="serviceCharge"
              className={styles.input}
              placeholder=""
              type="number"
              value={formik2.values.serviceCharge}
              onChange={formik2.handleChange}
            />
            {formik2.errors.serviceCharge && (
              <small className="p-error">{formik2.errors.serviceCharge}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <div className={styles.inout_adv}>
            <label htmlFor="propertyNumber">
              property Number<span>*</span>
            </label>
            <input
              name="propertyNumber"
              className={styles.input}
              placeholder=""
              type="text"
              value={formik2.values.propertyNumber}
              onChange={formik2.handleChange}
            />
            {formik2.errors.propertyNumber && (
              <small className="p-error">{formik2.errors.propertyNumber}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <div className={styles.inout_adv}>
            <label htmlFor="authNumber">
              auth Number<span>*</span>
            </label>
            <input
              name="authNumber"
              className={styles.input}
              placeholder=""
              type="text"
              value={formik2.values.authNumber}
              onChange={formik2.handleChange}
            />
            {formik2.errors.authNumber && (
              <small className="p-error">{formik2.errors.authNumber}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="furnished">
              furnished<span>*</span>
            </label>
            <div className={styles.radio_container_size}>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    id="furnished"
                    name="furnished"
                    type="radio"
                    value={true}
                    checked={formik2.values.furnished === true}
                    onChange={() => formik2.setFieldValue("furnished", true)}
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>Furnished</span>
                </label>
              </div>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    id="unfurnished"
                    name="furnished"
                    type="radio"
                    value={false}
                    checked={formik2.values.furnished === false}
                    onChange={() => formik2.setFieldValue("furnished", false)}
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>Unfurnished</span>
                </label>
              </div>
            </div>
            {formik2.errors.furnished && (
              <small className="p-error">{formik2.errors.furnished}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label htmlFor="mortageEligable">
              Mortgage Eligibility<span>*</span>
            </label>
            <div className={styles.radio_container_size}>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    id="eligible"
                    name="mortageEligable"
                    type="radio"
                    value={true}
                    checked={formik2.values.mortageEligable === true}
                    onChange={() =>
                      formik2.setFieldValue("mortageEligable", true)
                    }
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>
                    Eligible for Mortgage
                  </span>
                </label>
              </div>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    id="not-eligible"
                    name="mortageEligable"
                    type="radio"
                    value={false}
                    checked={formik2.values.mortageEligable === false}
                    onChange={() =>
                      formik2.setFieldValue("mortageEligable", false)
                    }
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>
                    Not Eligible for Mortgage
                  </span>
                </label>
              </div>
            </div>
            {formik2.errors.mortageEligable && (
              <small className="p-error">
                {formik2.errors.mortageEligable}
              </small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <ImageUpload
            label="Upload Qr code image"
            placeholder="Choose image"
            image={image}
            imageValue={imageValue}
            onImageUpload={handleImageUpload}
            onDeleteImage={handleDeleteImage}
            onDeleteImageValue={handleDeleteImageValue}
          />
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
