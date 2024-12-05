import React from "react";
import styles from "../../styles/addAd.module.css";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { fetchaddTypes } from "../apiRoutes";

const Step1 = ({ formData, setFormData, nextStep, getPerpose }) => {
  const { data: addTypes } = useQuery({
    queryKey: ["addTypes"],
    queryFn: fetchaddTypes,
  });
  const formik = useFormik({
    initialValues: {
      purpose: formData.purpose,
      category: formData.category,
      title: {
        ar: formData.title?.ar || "",
        en: formData.title?.en || "",
      },
      measurement: formData.measurement,
      type: formData.type,
      advertiserType: formData.advertiserType,
      adType: formData.adType,
      price: formData.price,
      currency: formData.currency,
      ready: formData.ready,
      commercialProperties: formData.commercialProperties || "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.commercialProperties)
        errors.commercialProperties = "commercial Properties is required";
      if (!values.adType) errors.adType = "ad Type is required";
      if (!values.purpose) errors.purpose = "Purpose is required";
      if (!values.category) errors.category = "Category is required";
      if (!values.measurement) errors.measurement = "measurement is required";
      if (!values.title?.ar)
        errors.title = { ar: "Ad Title in Arabic is required" };
      if (!values.title?.en)
        errors.title = {
          ...errors.title,
          en: "Ad Title in English is required",
        };
      if (!values.type) errors.type = "property Type is required";
      if (!values.advertiserType)
        errors.advertiserType = "Advertiser Type is required";
      if (!values.price) errors.price = "Total Price is required";
      if (!values.currency) errors.currency = "Currency is required";
      if (values.ready === null)
        errors.ready = "Delivery readiness is required";
      return errors;
    },
    onSubmit: (values) => {
      const updatedFormData = {
        ...formData,
        ...values,
      };
      console.log("Step 1 Form Data:", updatedFormData);
      setFormData(updatedFormData);
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form_contact_home}>
      <div className="div-flex-co pb-5">
        <h2>Publish your advertisement</h2>
        <p className="p-0">Add your advertisement details</p>
      </div>
      <div className="grid">
        <div className="col-12 md:col-12 lg:col-12 ">
          <div className={styles.inout_adv}>
            <label>
              Please Select Purpose <span>*</span>
            </label>
            <select
              name="purpose"
              value={formik.values.purpose}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Purpose</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "purpose") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.purpose && <small>{formik.errors.purpose}</small>}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          <div className={styles.inout_adv}>
            <label>
              select commercial property <span>*</span>
            </label>
            <select
              name="commercialProperties"
              value={formik.values.commercialProperties}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">select commercial property</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "commercial-property") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.commercialProperties && (
              <small>{formik.errors.commercialProperties}</small>
            )}
          </div>
        </div>
        {/* Category Field */}
        <div className="col-12 md:col-6 lg:col-6 ">
          <div className={styles.inout_adv}>
            <label>
              Select Category <span>*</span>
            </label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Select Category</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "category") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.category && <small>{formik.errors.category}</small>}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 ">
          <div className={styles.inout_adv}>
            <label>
              Select ad type <span>*</span>
            </label>
            <select
              name="adType"
              value={formik.values.adType}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Select adType</option>
              {addTypes?.map((ele) => {
                return (
                  <option value={ele.id} key={ele.id}>
                    {ele.name?.en}
                  </option>
                );
              })}
            </select>
            {formik.errors.adType && <small>{formik.errors.adType}</small>}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          {/* Ad Title Field */}
          <div className={styles.inout_adv}>
            <label>
              Ad Title En <span>*</span>
            </label>
            <input
              type="text"
              name="title.en"
              value={formik.values.title?.en}
              onChange={formik.handleChange}
              placeholder="Ex: Apartment 150 m for sale in Sun street excellent price"
              required
            />
            {formik.errors.title?.en && (
              <small>{formik.errors.title?.en}</small>
            )}
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label>
              Ad Title AR <span>*</span>
            </label>
            <input
              type="text"
              name="title.ar"
              value={formik.values.title?.ar}
              onChange={formik.handleChange}
              placeholder="Ex: Apartment 150 m for sale in Sun street excellent price"
              required
            />
            {formik.errors.title?.ar && (
              <small>{formik.errors.title?.ar}</small>
            )}
          </div>
        </div>
        {/* Ad Title Field */}

        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label>
              Advertiser Type <span>*</span>
            </label>
            <select
              name="advertiserType" // Added 'name' attribute
              value={formik.values.advertiserType}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">Advertiser Type</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "advertiser-type") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.advertiserType && (
              <small>{formik.errors.advertiserType}</small>
            )}
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label>
              property Type <span>*</span>
            </label>
            <select
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">property Type</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "property-type") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.type && <small>{formik.errors.type}</small>}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          {/* Advertiser Type Field */}
          <div className={styles.inout_adv}>
            <label>
              Advertiser Type <span>*</span>
            </label>
            <select
              name="measurement"
              value={formik.values.measurement}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option value="">property Type</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "measurement") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.measurement && (
              <small>{formik.errors.measurement}</small>
            )}
          </div>
        </div>
        {/* Total Price Field */}
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label>
              Total Price <span>*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              placeholder="Enter total price"
              min="0"
              required
            />
            {formik.errors.price && <small>{formik.errors.price}</small>}
          </div>
        </div>

        {/* Currency Field */}
        <div className="col-12 md:col-6 lg:col-6">
          <div className={styles.inout_adv}>
            <label>
              Select Currency <span>*</span>
            </label>
            <select
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              className={`form-select ${styles.formSelect}`}
            >
              <option data-display="Select Currency">Select Currency</option>
              {getPerpose?.map((ele) => {
                if (ele.type === "currency") {
                  return ele.properties?.map((property) => (
                    <option value={property._id} key={property._id}>
                      {property.name?.en}
                    </option>
                  ));
                }
                return null;
              })}
            </select>
            {formik.errors.currency && <small>{formik.errors.currency}</small>}
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12 ">
          {/* Delivery Readiness Field */}
          <div className={styles.inout_adv}>
            <label>
              Delivery Readiness <span>*</span>
            </label>
            <div className={styles.radio_container_size}>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    type="radio"
                    name="ready"
                    value="ready"
                    checked={formik.values.ready === true}
                    onChange={() => formik.setFieldValue("ready", true)}
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>Ready</span>
                </label>
              </div>
              <div className={styles.radio_wrapper}>
                <label className={styles.radio_button}>
                  <input
                    type="radio"
                    name="ready"
                    value="unready"
                    checked={formik.values.ready === false}
                    onChange={() => formik.setFieldValue("ready", false)}
                  />
                  <span className={styles.radio_checkmark}></span>
                  <span className={styles.radio_label}>Unready</span>
                </label>
              </div>
            </div>
            {formik.errors.ready && <small>{formik.errors.ready}</small>}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex mt-4 align-items-center justify-content-between">
        <button type="submit" className="add_btn">
          Next
        </button>
      </div>
    </form>
  );
};
export default Step1;
