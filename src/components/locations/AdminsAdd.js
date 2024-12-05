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
import {
  updateAdmins,
  createadmins,
  getadmins,
} from "../../store/LocationsSlice";
import { Password } from "primereact/password";

const AdminsAdd = ({ visible, setVisible, selectedAdmins, first, rows }) => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Name: selectedAdmins ? selectedAdmins.name || "" : "",
      email: selectedAdmins ? selectedAdmins.email || "" : "",
      password:  "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.Name) errors.Name = "  name is required.";
      if (!data.email) {
        errors.email = "Email is required.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        errors.email = "Invalid email format.";
      }
      if (!data.password) errors.password = "  password is required.";
      return errors;
    },
    onSubmit: (data) => {
      const languageData = {
        name: data.Name,
        email: data.email,
        password: data.password,
      };
      const action = selectedAdmins
        ? updateAdmins({ id: selectedAdmins._id, data: languageData })
        : createadmins(languageData);

      dispatch(action)
        .unwrap()
        .then(() => {
          dispatch(
            getadmins({ page: Math.floor(first / rows) + 1, limit: rows })
          );
          formik.resetForm();
          setVisible(false);
          toast.current.show({
            severity: "success",
            summary: "Saved successfully!",
          });
        })
        .catch((err) => console.error("Save error:", err.message));
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) =>
    isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );

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
            <div className="col-12">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="Name"> Name</label>
                  <InputText
                    id="Name"
                    name="Name"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("Name"),
                    })}
                    value={formik.values.Name}
                    onChange={(e) =>
                      formik.setFieldValue("Name", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("Name")}
              </div>
            </div>
            <div className="col-12">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="email">email</label>
                  <InputText
                    id="email"
                    name="email"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("email"),
                    })}
                    value={formik.values.email}
                    onChange={(e) =>
                      formik.setFieldValue("email", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("email")}
              </div>
            </div>
            <div className="col-12">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="password">password</label>
                  <Password
                    id="password"
                    name="password"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("password"),
                    })}
                    value={formik.values.password}
                    toggleMask
                    onChange={(e) =>
                      formik.setFieldValue("password", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("password")}
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

export default AdminsAdd;
