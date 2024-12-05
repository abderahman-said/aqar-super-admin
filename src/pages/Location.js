import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmirates } from "../store/LocationsSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
const EmairitesAdd = React.lazy(() =>
  import("../components/locations/EmairitesAdd")
);

const Location = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getEmiratesData } = useSelector((state) => state.LocationsSlice);
  const [visible, setVisible] = useState(false);
  const [selectedEmirate, setSelectedEmirate] = useState(null); // New state for selected emirate
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getEmiratesData) {
      dispatch(getEmirates());
    }
  }, [dispatch, getEmiratesData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button 
        className="edite_btn" 
        onClick={() => {
          setSelectedEmirate(rowData); 
          setVisible(true);   
        }}
      >
        <FiEdit />
      </button>
      <button className="del_btn">
        <RiDeleteBin6Line />
      </button>
    </div>
  );

  const InfoBody = (rowData) => (
    <NavLink to={`/Region/${rowData.id}`} className="info_btn">
      <AiOutlineInfoCircle />
    </NavLink>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Emirates</h3>
        <button className="add_btn" onClick={() => {
          setSelectedEmirate(null);  
          setVisible(true);
        }}>
          Add Emirates
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getEmiratesData || []}
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
            totalRecords={getEmiratesData?.length || 0}
          >
            <Column header="add Emirates" body={InfoBody} style={{ maxWidth: "5rem" }} />
            <Column field="name.en" header="Name en" />
            <Column field="name.ar" header="Name ar" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <EmairitesAdd visible={visible} setVisible={setVisible} selectedEmirate={selectedEmirate} />
      </Suspense>
    </div>
  );
};

export default Location;
