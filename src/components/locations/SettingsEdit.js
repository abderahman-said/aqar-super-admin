import style2 from "../../styles/Forms.module.css";
import { useCallback, useRef, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";

import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { getSettings, updateSettings } from "../../store/ContactSlice";
import ImageUpload from "../ImageUpload";
import { useUpload, useUploadVedio } from "../apiRoutes";
import VideoUpload from "../VideoUpload";

const SettingsEdit = ({ visible, setVisible, selectedSpciality }) => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { mutate: UploadFiles } = useUpload();
  const { mutate: UploadFilesVedio } = useUploadVedio();
  const [image, setImage] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [Vedio, setVedio] = useState(null);
  const [VedioLink, setVedioLink] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const initialValues = {
    appName: selectedSpciality?.appName || "",
    appDescription: selectedSpciality?.appDescription || "",
    seoKeywords: selectedSpciality?.seo?.keywords || "",
    seoDescription: selectedSpciality?.seo?.description || "",
    location: selectedSpciality?.location || "",
    email: selectedSpciality?.email || "",
    phone: selectedSpciality?.phone || "",
    copyRight: selectedSpciality?.copyRight || "",
    instagram: selectedSpciality?.socialMedia?.instagram || "",
    whatsapp: selectedSpciality?.socialMedia?.whatsapp || "",
    facebook: selectedSpciality?.socialMedia?.facebook || "",
    telegram: selectedSpciality?.socialMedia?.telegram || "",
    twitter: selectedSpciality?.socialMedia?.twitter || "",
    heroVideoLink: selectedSpciality?.heroVideo?.link || "",
    appLogoLink: selectedSpciality?.appLogo?.link || "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validate: (data) => {
      const errors = {};
      Object.keys(data).forEach((key) => {
        if (!data[key]) {
          errors[key] = `${key} is required.`;
        }
      });
      return errors;
    },
    onSubmit: (data) => {
      const updatedData = {
        appName: data.appName,
        appDescription: data.appDescription,
        seo: {
          keywords: data.seoKeywords,
          description: data.seoDescription,
        },
        location: data.location,
        email: data.email,
        phone: data.phone,
        copyRight: data.copyRight,
        socialMedia: {
          instagram: data.instagram,
          whatsapp: data.whatsapp,
          facebook: data.facebook,
          telegram: data.telegram,
          twitter: data.twitter,
        },
        heroVideo: Vedio ? Vedio : undefined,
        appLogo: image ? image : undefined,
      };
      if (image === data.appLogoLink) {
        delete updatedData.appLogoLink;
      }
      if (Vedio === data.heroVideoLink) {
        delete updatedData.heroVideo;
      }
      dispatch(updateSettings(updatedData))
        .unwrap()
        .then(() => {
          dispatch(getSettings());
          formik.resetForm();
          setVisible(false);
          toast.current.show({
            severity: "success",
            summary: "Saved successfully!",
          });
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
            setImage(uploadedFile.id);
            setImageLink(uploadedFile.link);
            formik.setFieldValue("appLogo", uploadedFile.id);
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
  const uploadLoading = () => {
    toast.current.show({
      severity: "info",
      summary: "Uploading video...",
      detail: "Please wait, this may take a while.",
      sticky: true, // Keeps the toast visible
    });
  };

  const handleVedioUpload = useCallback(
    async (e) => {
      const file = e.target.files[0];
      if (file) {
        setIsVideoLoading(true);
        // toast.current.show({
        //   severity: "info",
        //   summary: "Uploading video...",
        //   detail: "Please wait, this may take a while.",
        //   sticky: true, // Keeps the toast visible
        // });

        const formData = new FormData();
        formData.append("files", file);

        await UploadFilesVedio(formData, {
          onSuccess: (response) => {
            const uploadedFile = response.data.files[0];
            setVedio(uploadedFile.id);
            setVedioLink(uploadedFile.link);
            formik.setFieldValue("heroVideo", uploadedFile.id);
            setIsVideoLoading(false);
            toast.current.clear();
            toast.current.show({
              severity: "success",
              summary: "Video uploaded successfully!",
              life: 3000, // 3 seconds for success message
            });
          },
          onError: () => {
            setIsVideoLoading(false);
            toast.current.clear();
            toast.current.show({
              severity: "error",
              summary: "Upload failed",
              detail:
                "The video must be in mp4 format, and its size must not exceed 8 MB.",
              life: 5000, // 5 seconds for error message
            });
          },
        });
      }
    },
    [UploadFilesVedio, formik]
  );

  const handleDeleteImage = useCallback(() => {
    setImage(null);
    setImageLink(null);
    formik.setFieldValue("appLogo", "");
  }, [formik]);

  const handleDeleteVedio = useCallback(() => {
    setVedio(null);
    setVedioLink(null);
    formik.setFieldValue("heroVideo", "");
  }, [formik]);
  const visibleFields = Object.keys(initialValues).filter(
    (key) => key !== "heroVideoLink" && key !== "appLogoLink"
  );
  return (
    <>
      <Toast ref={toast} />
      {isVideoLoading && uploadLoading()}

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
            {visibleFields.map((key) => (
              <div key={key} className="col-6">
                <div className={style2.inputFormik2}>
                  <div className={style2.Signup_container}>
                    <label htmlFor={key}>{key}</label>
                    <InputText
                      id={key}
                      name={key}
                      className={classNames({
                        "p-invalid": isFormFieldInvalid(key),
                      })}
                      value={formik.values[key]}
                      onChange={(e) =>
                        formik.setFieldValue(key, e.target.value)
                      }
                    />
                  </div>
                  {getFormErrorMessage(key)}
                </div>
              </div>
            ))}
            <div className="col-12 md:col-12 lg:col-12">
              <ImageUpload
                label="Upload appLogo"
                placeholder="Choose image"
                image={imageLink}
                imageValue={formik.values.appLogoLink}
                onImageUpload={handleImageUpload}
                onDeleteImage={handleDeleteImage}
              />
              {isImageLoading && <p>Loading image...</p>}
            </div>
            <div className="col-12 md:col-12 lg:col-12">
              <VideoUpload
                label="Upload Video hero"
                placeholder="Choose Video"
                video={VedioLink}
                videoValue={formik.values.heroVideoLink}
                onvideoUpload={handleVedioUpload}
                onDeletevideo={handleDeleteVedio}
              />
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

export default SettingsEdit;
