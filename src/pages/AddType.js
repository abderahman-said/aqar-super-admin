import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
import { getTypes } from "../store/ContactSlice";
import { MdUnsubscribe } from "react-icons/md";
const AddTypeAdd = React.lazy(() =>
  import("../components/locations/AddTypeAdd")
);

const AddType = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getTypesData } = useSelector((state) => state.ContactSlice);
  const [visible, setVisible] = useState(false);
  const [selectedAddType, setselectedAddType] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getTypesData) {
      dispatch(getTypes());
    }
  }, [dispatch, getTypesData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setselectedAddType(rowData);
          setVisible(true);
        }}
      >
        <FiEdit />
      </button>
      <NavLink to={`/Subscription/${rowData.id}`} className="add_btn_2">
      <MdUnsubscribe />
      Subscription
      </NavLink>
    </div>
  );



  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Types</h3>
        <button className="add_btn" onClick={() => {
          setselectedAddType(null); // Reset selected emirate for adding
          setVisible(true);
        }}>
          Add  Type
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getTypesData || []}
            dataKey="id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="no data "
            totalRecords={getTypesData?.length || 0}
          >
            <Column field="name.en" header="Name en" />
            <Column field="name.ar" header="Name ar" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <AddTypeAdd visible={visible} setVisible={setVisible} selectedAddType={selectedAddType} />
      </Suspense>
    </div>
  );
};

export default AddType;
