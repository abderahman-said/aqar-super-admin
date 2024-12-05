import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";
import Loader from "../components/layouts/loading/loading";
import { deleteSubscription, getSubscription } from "../store/ContactSlice";
import { useParams } from "react-router-dom";
const AddSub = React.lazy(() =>
  import("../components/locations/AddSub")
);

const Subscription = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const toast = useRef(null);
  const { getSubscriptionData } = useSelector((state) => state.ContactSlice);
  const [visible, setVisible] = useState(false);
  const [selectedSub, setselectedSub] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getSubscriptionData) {
      dispatch(getSubscription(id));
    }
  }, [dispatch, getSubscriptionData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };
  
  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setselectedSub(rowData);
          setVisible(true);
        }}
      >
        <FiEdit />
      </button>
      {/* <button
        className="del_btn"
        onClick={() => handleDelete(rowData.id)}
      >
        <RiDeleteBin6Line />
      </button> */}
    </div>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Subscription</h3>
        <button className="add_btn" onClick={() => {
          setselectedSub(null);  
          setVisible(true);
        }}>
          Add  Subscription
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getSubscriptionData || []}
            dataKey="id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="no data"
            totalRecords={getSubscriptionData?.length || 0}
          >
            <Column field="name.en" header="Name (EN)" />
            <Column field="name.ar" header="Name (AR)" />
            <Column field="duration" header="Duration (Months)" />
            <Column field="price" header="Price" />
            <Column field="adType.name.en" header="  Type (EN)" />
            <Column field="adType.name.ar" header="  Type (AR)" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <AddSub
          visible={visible}
          setVisible={setVisible}
          selectedSub={selectedSub}
          id={id}
        />
      </Suspense>
    </div>
  );
};

export default Subscription;
