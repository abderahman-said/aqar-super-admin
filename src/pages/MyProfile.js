import React, {
  useCallback,
  useEffect,
  useState,
  lazy,
  Suspense,
  useRef,
} from "react";
import styles from "../styles/addAd.module.css";
import { useFormik } from "formik";
import {
  fetchAccountDetails,
  fetchEmirates,
  useUpdateAgencies,
  useUpload,
} from "../components/apiRoutes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Toast } from "primereact/toast";
import Loader from "../components/layouts/loading/loading";

const AgencyFields = lazy(() => import("../components/AgencyFields"));
const ImageUpload = lazy(() => import("../components/ImageUpload"));

const MyACCOUNT = () => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState(null);
  const [loading, setLoading] = useState(false); // حالة للتحكم في التحميل
  const { mutate: UpdateAgencies } = useUpdateAgencies();
  const toast = useRef(null);

  const { data: getEmirates } = useQuery({
    queryKey: ["Emirates"],
    queryFn: fetchEmirates,
  });
  const { mutate: UploadFiles } = useUpload();

  const Succes = () => {
    toast.current.show({
      severity: "success",
      summary: "Saved successfully!",
    });
  };
  const { data: accountDetails } = useQuery({
    queryKey: ["AccountDetails"],
    queryFn: fetchAccountDetails,
  });

  const formik2 = useFormik({
    initialValues: {
      name: "",
      phone: "",
      description: "",
      image: [],
      servicesArea: [],
    },
    validate: (values) => {
      const errors = {};
      if (!values.description) {
        errors.description = "description is required";
      }
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (!/^\+?[1-9]\d{1,14}$/i.test(values.phone)) {
        errors.phone = "Invalid phone number format";
      }
      if (!values.servicesArea) {
        errors.servicesArea = "Emirate is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true); 
      const data = {
        description: values.description,
        name: values.name,
        phone: values.phone,
        servicesArea: values.servicesArea.filter(Boolean) || [],
        photo: image || accountDetails?.photo,
      };
      UpdateAgencies(data, {
        onSuccess: () => {
          queryClient.invalidateQueries("AccountDetails");
          setImage(null);
          Succes();
          setLoading(false);   
        },
        onError: () => {
          setLoading(false);
        },
      });
    },
  });

  useEffect(() => {
    if (accountDetails) {
      const { name, phone, description, servicesArea } = accountDetails;
      setImageValue(accountDetails?.photo);
      formik2.setValues({
        name,
        phone,
        description,
        image: [],
        servicesArea: servicesArea?.map((ele) => ele._id) || [],
      });
    }
  }, [accountDetails]);

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
            formik2.setFieldValue("image", uploadedFile.id);
          },
        });
      }
    },
    [UploadFiles, formik2]
  );

  const handleDeleteImage = useCallback(() => {
    setImage(null);
    formik2.setFieldValue("image", "");
  }, [formik2]);

  return (
    <div className={styles.user_information}>
      <Toast ref={toast} />
      {loading ? (
        <Loader />
      ) : null}
      <div className="title_page">
        <h3>My Profile </h3>
      </div>
      <form
          onSubmit={formik2.handleSubmit}
          className={styles.form_contact_home}
        >
          <div className="row">
            <div className="col-md-6">
              <div className={styles.inout_adv}>
                <label>
                  Name <span>*</span>
                </label>
                <input
                  name="name"
                  id="name"
                  className={styles.input}
                  type="text"
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                  value={formik2.values.name}
                />
                {formik2.touched.name && formik2.errors.name && (
                  <small className="p-error">{formik2.errors.name}</small>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.inout_adv}>
                <label>
                  Phone <span>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={formik2.handleChange}
                  onBlur={formik2.handleBlur}
                  value={formik2.values.phone}
                />
                {formik2.touched.phone && formik2.errors.phone && (
                  <small className="p-error">{formik2.errors.phone}</small>
                )}
              </div>
            </div>

            <Suspense fallback={<Loader />}>
              <AgencyFields formik={formik2} getEmirates={getEmirates} />
              <ImageUpload
                image={image}
                imageValue={imageValue}
                onImageUpload={handleImageUpload}
                onDeleteImage={handleDeleteImage}
              />
            </Suspense>

            <button className="add_btn mt-4" type="submit" disabled={loading}>
              Save Changes
            </button>
          </div>
        </form>
   
    </div>
  );
};

export default React.memo(MyACCOUNT);
