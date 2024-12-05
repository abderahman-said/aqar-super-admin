import React from "react";
import { MultiSelect } from "primereact/multiselect";
import styles from "../styles/addAd.module.css";
const AgencyFields = ({ formik, getEmirates }) => {
  return (
    <>
      {" "}
      <div className="col-md-6">
        <div className={styles.inout_adv}>
          <label htmlFor="servicesArea">
            Property Emirate <span>*</span>
          </label>
          <MultiSelect
            value={formik.values.servicesArea.map((area) => ({
              id: area,
              name:
                getEmirates?.find((emirate) => emirate?.id === area)?.name.en ||
                "",
            }))}
            options={getEmirates?.map((emirate) => ({
              id: emirate?.id,
              name: emirate?.name?.en,
            }))}
            onChange={(e) => {
              formik.setFieldValue(
                "servicesArea",
                e.value.map((emirate) => emirate.id)
              );
            }}
            optionLabel="name"
            placeholder="Select emirate"
            className={`form-select ${styles.formSelect}`}
            display="chip"
          />

          {formik.errors.servicesArea && (
            <small className="p-error">{formik.errors.servicesArea}</small>
          )}
        </div>
      </div>
      <div className={`${styles.inoutIconDiv} ${styles.inout_adv}`}>
        <label>
          description <span>*</span>
        </label>
        <textarea
          name="description"
          placeholder="Complete description of the property..."
          rows="4"
          id="property-description"
          className="text_area"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.touched.description && formik.errors.description ? (
          <small className={styles.error}>{formik.errors.description}</small>
        ) : null}
      </div>
    </>
  );
};

export default AgencyFields;
