import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Toast } from "primereact/toast";
import {
  Createnewsletter,
  deleteNewsletter,
  getNewsletter,
} from "../store/ContactSlice";
import { FiSend } from "react-icons/fi";
import { useFormik } from "formik";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

const Newsletter = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { NewsletterData } = useSelector((state) => state.ContactSlice);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getNewsletter());
  }, [dispatch]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleDelete = useCallback(
    async (id) => {
      try {
        await dispatch(deleteNewsletter(id)).unwrap();
        toast.current.show({
          severity: "success",
          summary: "Deleted",
          detail: "Contact deleted successfully",
        });
        dispatch(getNewsletter());
      } catch (error) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      }
    },
    [dispatch]
  );

  const handleSendEmail = useCallback((email) => {
    setEmail(email);
    setVisible(true);
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      subject: "",
    },
    validate: (data) => {
      const errors = {};
      if (!data.subject) errors.subject = "Subject is required.";
      return errors;
    },
    onSubmit: async (data, { resetForm }) => {
      const payload = {
        subject: data.subject,
        body: email,
      };
      try {
        await dispatch(Createnewsletter(payload)).unwrap();
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Newsletter sent successfully",
        });
        resetForm();
        setVisible(false);
      } catch (error) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      }
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

  const StateBody = useCallback(
    (rowData) => (
      <div className="StatusBtn">
        <button
          className="edite_btn"
          onClick={() => handleSendEmail(rowData.email)}
        >
          <FiSend />
        </button>
        <button className="del_btn" onClick={() => handleDelete(rowData.id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    ),
    [handleDelete, handleSendEmail]
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Newsletter</h3>
      </div>
      <div className="Table_container">
        <div className={styles.Table} id="tableFirstItemStart">
          <DataTable
            value={NewsletterData || []}
            dataKey="id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTable}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="No data"
            totalRecords={NewsletterData?.length || 0}
          >
            <Column field="email" header="Email" />
            <Column
              header="Action"
              body={StateBody}
              style={{ maxWidth: "10rem" }}
            />
          </DataTable>
        </div>
      </div>
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="grid">
            <div className="col-12">
              <div className={styles.inputFormik2}>
                <div className={styles.Signup_container}>
                  <label htmlFor="subject">Subject</label>
                  <InputText
                    id="subject"
                    name="subject"
                    className={classNames({
                      "p-invalid": isFormFieldInvalid("subject"),
                    })}
                    value={formik.values.subject}
                    onChange={(e) =>
                      formik.setFieldValue("subject", e.target.value)
                    }
                  />
                </div>
                {getFormErrorMessage("subject")}
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

export default Newsletter;
