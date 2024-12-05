import React, {   useRef, useState } from "react";
import styles from "../styles/Cp.module.css";
import style2 from "../styles/Forms.module.css";
import { FaEdit, FaEye } from "react-icons/fa";
import { Image } from "primereact/image";
import {
  fetchPropertiesAdmin,
  UsePostsubscriptionsadmin,
  UseSubscriptionsAdType,
  useUpdateVisibility,
} from "../components/apiRoutes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { InputSwitch } from "primereact/inputswitch";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { NavLink } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { useFormik } from "formik";

const AdsAqar = () => {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const queryClient = useQueryClient();

  const { data: PropertiesAdmin } = useQuery({
    queryKey: ["PropertiesAdmin"],
    queryFn: fetchPropertiesAdmin,
  });

  const { mutate: Postsubscriptionsadmin } = UsePostsubscriptionsadmin();
  const { mutate: updateVisibility } = useUpdateVisibility();
  const { mutate: SubscriptionsAdType, data: SubscriptionsAdTypeData } =
    UseSubscriptionsAdType();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.type) errors.type = "Type subscription is required.";
      return errors;
    },
    onSubmit: (data, { resetForm }) => {
      const payload = { property: id, subscription: data.type.id };
      Postsubscriptionsadmin(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries("PropertiesAdmin");
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Subscription updated successfully.",
          });
          setVisible(false);
          resetForm();
        },
        onError: () => {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to update subscription.",
          });
        },
      });
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

  const editTemplate = (rowData) => (
    <NavLink
      to={`/Edit/${rowData.id}/${rowData.title.en
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
      className={styles.edit}
    >
      <FaEdit />
    </NavLink>
  );

  const viewTemplate = (rowData) => (
    <NavLink
      to={`/View/${rowData.id}/${rowData.title.en
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
      className={styles.view}
    >
      <FaEye />
    </NavLink>
  );

  const deleteTemplate = (rowData) => (
    <InputSwitch
      checked={rowData.visible}
      onChange={(e) =>
        updateVisibility({ id: rowData.id, visibility: e.value })
      }
    />
  );

  const stateTemplate = (rowData) => (
    <div className="flex align-items-center gap-3">
      <span
        className={
          rowData.activeSubscription
            ? styles.statusNotFinished
            : styles.statusFinished
        }
      >
        {rowData.activeSubscription ? "Active" : "Inactive"}
      </span>
      {!rowData.activeSubscription && (
        <button
          className="add_btn_2"
          onClick={() => {
            setVisible(true);
            setId(rowData.id);
            SubscriptionsAdType(rowData.adType);
          }}
        >
          Activate
        </button>
      )}
    </div>
  );

  const imagesBody = (rowData) => (
    <Image
      src={rowData.images[0]?.link}
      zoomSrc={rowData.images[0]?.link}
      alt="Property"
      className="property-thumbnail"
      width={50}
      height={50}
      preview
    />
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>My Ads</h3>
        <NavLink className="add_btn" to="/addAd">
          Add Ads
        </NavLink>
      </div>
      <div className="Tabel_container">
        <DataTable
          value={PropertiesAdmin || []}
          paginator
          rows={5}
          className={styles.datatable}
          lazy
        >
          <Column field="title.en" header="Title" />
          <Column field="price" header="Price" />
          <Column field="currency.name.en" header="Currency" />
          <Column field="owner" header="Owner Name" />
          <Column body={stateTemplate} header="Status" />
          <Column
            header="Images"
            body={imagesBody}
            style={{ maxWidth: "7rem" }}
          />
          <Column body={editTemplate} header="Edit" />
          <Column body={viewTemplate} header="View" />
          <Column body={deleteTemplate} header="Visibility" />
        </DataTable>
      </div>

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
              <div className={style2.inputFormik2}>
                <div className={style2.Signup_container}>
                  <label htmlFor="type">Type of Subscription</label>
                  <Dropdown
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("type"),
                    })}
                    value={formik.values.type}
                    onChange={(e) => formik.setFieldValue("type", e.value)}
                    options={SubscriptionsAdTypeData}
                    optionLabel="name.en"
                    placeholder="Select a subscription type"
                  />
                  {getFormErrorMessage("type")}
                </div>
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
    </div>
  );
};

export default AdsAqar;
