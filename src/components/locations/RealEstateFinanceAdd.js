import style2 from "../../styles/Forms.module.css";
import { useEffect, useRef } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import {
  getRealEstateFinances,
  getUpdateRealEstateFinance,
} from "../../store/LocationsSlice";
import { Dropdown } from "primereact/dropdown";

const RealEstateFinanceAdd = ({
  visible,
  setVisible,
  selectedRealEstateFinance,
  rows,
  status,
}) => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  console.log("selectedRealEstateFinance", selectedRealEstateFinance);
  // Correcting the statusOptions to be an array of objects
  const statusOptions = ["approved", "pending", "connecting", "rejected"];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      status: selectedRealEstateFinance ? selectedRealEstateFinance.status : "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.status) {
        errors.status = "Status is required.";
      }
      return errors;
    },
    onSubmit: (data) => {
      const date = {
        status: data,
      };
      dispatch(
        getUpdateRealEstateFinance({
          id: selectedRealEstateFinance._id,
          data: date.status,
        })
      )
        .unwrap()
        .then(() => {
          dispatch(getRealEstateFinances({ page: 1, limit: rows, status }));
          formik.resetForm();
          setVisible(false);
          Succes();
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  useEffect(() => {
    if (selectedRealEstateFinance) {
      formik.setValues({
        ...formik.values,
        status: selectedRealEstateFinance.status,
      });
    }
  }, [selectedRealEstateFinance]);

  const Succes = () => {
    toast.current.show({
      severity: "success",
      summary: "Saved successfully!",
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form
          onSubmit={formik.handleSubmit}
          className={style2.Signup_form_container}
        >
          <div className={style2.inputFormik2}>
            <div className={style2.Signup_container}>
              <label htmlFor="status">Type of Subscription</label>
              <Dropdown
                className={classNames({
                  "p-invalid": isFormFieldInvalid("status"),
                })}
                value={formik.values.status}
                onChange={(e) => formik.setFieldValue("status", e.value)}
                options={statusOptions}
                optionLabel=""
                placeholder="Select a status"
              />

              {getFormErrorMessage("status")}
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="add_btn mx-auto">
              Save
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default RealEstateFinanceAdd;
