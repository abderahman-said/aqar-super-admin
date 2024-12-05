import style2 from "../../styles/Forms.module.css";
import styles from "../../styles/Tabel.module.css";
import { useRef } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { createSub, getSubscription, updateSub } from "../../store/ContactSlice";

const AddSub = ({ visible, setVisible, selectedSub, id }) => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nameEn: selectedSub ? selectedSub.name.en : "",
      nameAr: selectedSub ? selectedSub.name.ar : "",
      duration: selectedSub ? selectedSub.duration : "",
      price: selectedSub ? selectedSub.price : "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.nameEn) {
        errors.nameEn = "English name is required.";
      }
      if (!data.nameAr) {
        errors.nameAr = "Arabic name is required.";
      }
      if (!data.duration || isNaN(data.duration)) {
        errors.duration = "Duration must be a valid number.";
      }
      if (!data.price || isNaN(data.price)) {
        errors.price = "Price must be a valid number.";
      }
      return errors;
    },
    onSubmit: (data) => {
      const date = {
        name: {
          en: data.nameEn,
          ar: data.nameAr,
        },
        duration: Number(data.duration), // Convert to number
        price: Number(data.price), // Convert to number
        adType: id,
      };

      if (selectedSub) {
        dispatch(updateSub({ id: selectedSub.id, data: date }))
          .unwrap()
          .then(() => {
            dispatch(getSubscription(id));
            formik.resetForm();
            setVisible(false);
            Succes();
          })
          .catch((err) => {
            console.error(err.message);
          });
      } else {
        dispatch(createSub(date))
          .unwrap()
          .then(() => {
            dispatch(getSubscription(id));
            formik.resetForm();
            setVisible(false);
            Succes();
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
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
          <div className="grid">
            <div className="col-6">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="nameAr">Arabic Name</label>
                  <InputText
                    id="nameAr"
                    name="nameAr"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("nameAr"),
                    })}
                    value={formik.values.nameAr}
                    onChange={(e) =>
                      formik.setFieldValue("nameAr", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("nameAr")}
              </div>
            </div>
            <div className="col-6">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="nameEn">English Name</label>
                  <InputText
                    id="nameEn"
                    name="nameEn"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("nameEn"),
                    })}
                    value={formik.values.nameEn}
                    onChange={(e) =>
                      formik.setFieldValue("nameEn", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("nameEn")}
              </div>
            </div>
            <div className="col-6">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="duration">Duration</label>
                  <InputText
                    id="duration"
                    name="duration"
                    type="number" // Ensure input is a number
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("duration"),
                    })}
                    value={formik.values.duration}
                    onChange={(e) =>
                      formik.setFieldValue("duration", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("duration")}
              </div>
            </div>
            <div className="col-6">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="price">Price</label>
                  <InputText
                    id="price"
                    name="price"
                    type="number"  
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("price"),
                    })}
                    value={formik.values.price}
                    onChange={(e) =>
                      formik.setFieldValue("price", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("price")}
              </div>
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

export default AddSub;
