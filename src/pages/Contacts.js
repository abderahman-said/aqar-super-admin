import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { deleteContact, getContact } from "../store/ContactSlice";
import { Dialog } from "primereact/dialog";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";

const Contacts = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getContactData } = useSelector((state) => state.ContactSlice);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [visible, setVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");  

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.current.show({ severity: "success", summary: "Deleted", detail: "Contact deleted successfully" });
      dispatch(getContact());
    } catch (error) {
      toast.current.show({ severity: "error", summary: "Error", detail: error.message });
    }
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setSelectedMessage(rowData.message); 
          setVisible(true);
        }}
      >
        <MdOutlineMessage />
      </button>
      <button
        className="del_btn"
        onClick={() => handleDelete(rowData.id)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Contacts</h3>
      </div>
      <div className="Table_container">
        <div className={styles.Table} id="tableFirstItemStart">
          <DataTable
            value={getContactData || []}
            dataKey="id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTable}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="no data"
            totalRecords={getContactData?.length || 0}
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column field="subject" header="Subject" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>

      {/* Dialog to show the message */}
      <Dialog
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        header="Message"
      >
          
          <p>{selectedMessage}</p> 
        
      </Dialog>
    </div>
  );
};

export default Contacts;
