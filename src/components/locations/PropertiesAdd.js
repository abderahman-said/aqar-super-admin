import style2 from "../../styles/Forms.module.css";
import styles from "../../styles/Tabel.module.css";
import { useCallback, useRef, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import {
  createPropertiesGrop,
  getPropertiesGrop,
  updatePropertiesGrop,
} from "../../store/PropertySlice";
import { useUpload } from "../apiRoutes";
import ImageUpload from "../ImageUpload";

const PropertiesAdd = ({
  visible,
  setVisible,
  selectedType,
  selectedSpciality,
}) => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const [imageLink, setImageLink] = useState(
    selectedSpciality?.logo?.link || null
  );
  const [isImageLoading, setIsImageLoading] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nameEn: selectedSpciality ? selectedSpciality.name.en : "",
      nameAr: selectedSpciality ? selectedSpciality.name.ar : "",
      logo: selectedSpciality ? selectedSpciality.logo?.id : "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.nameEn) {
        errors.nameEn = "English name is required.";
      }
      if (!data.nameAr) {
        errors.nameAr = "Arabic name is required.";
      }
      if (selectedType === "amenity" && !data.logo) {
        errors.logo = "Logo is required for amenity.";
      }
      return errors;
    },
    onSubmit: (data) => {
      const createData = {
        name: { ar: data.nameAr, en: data.nameEn },
        type: selectedType,
        logo: data.logo,  
      };
      if (selectedSpciality) {
        dispatch(
          updatePropertiesGrop({ id: selectedSpciality._id, data: createData })
        )
          .unwrap()
          .then(() => {
            dispatch(getPropertiesGrop());
            formik.resetForm();
            setVisible(false);
            Succes();
          })
          .catch((err) => {
            console.error(err.message);
          });
      } else {
        dispatch(createPropertiesGrop(createData))
          .unwrap()
          .then(() => {
            dispatch(getPropertiesGrop());
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

  const { mutate: UploadFiles } = useUpload();
  const handleImageUpload = useCallback(
    async (e) => {
      const file = e.target.files[0];
      if (file) {
        setIsImageLoading(true);
        toast.current.show({
          severity: "info",
          summary: "Uploading image...",
        });
        const formData = new FormData();
        formData.append("files", file);
        await UploadFiles(formData, {
          onSuccess: (response) => {
            const uploadedFile = response.data.files[0];
            setImageLink(uploadedFile.link);
            formik.setFieldValue("logo", uploadedFile.id);
            setIsImageLoading(false);
            toast.current.show({
              severity: "success",
              summary: "Image uploaded successfully!",
            });
          },
          onError: () => {
            setIsImageLoading(false);
            toast.current.show({
              severity: "error",
              summary: "Image upload failed",
            });
          },
        });
      }
    },
    [UploadFiles, formik]
  );

  const handleDeleteImage = useCallback(() => {
    // setImage(null);
    setImageLink(null);
    formik.setFieldValue("logo", "");
  }, [formik]);

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
        header={selectedType}
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
            <div className="col-12">
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
            {selectedType === "amenity" && (
              <div className="col-12 md:col-12 lg:col-12">
                <ImageUpload
                  label="Upload Logo"
                  placeholder="Choose image"
                  image={imageLink}
                  imageValue={formik.values.appLogoLink}
                  onImageUpload={handleImageUpload}
                  onDeleteImage={handleDeleteImage}
                />
                {isImageLoading && <p>Loading image...</p>}
              </div>
            )}
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

export default PropertiesAdd;
