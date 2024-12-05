import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgencies, getDeleteUser } from "../store/LocationsSlice";
import { Toast } from "primereact/toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Agencies = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getAgenciesData } = useSelector((state) => state.LocationsSlice);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getAgenciesData) {
      const limit = 200;
      dispatch(getAgencies(limit));
    }
  }, [dispatch, getAgenciesData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const verifiedBodyTemplate = (rowData) => (
    <span className={rowData.verified ? "active" : "noactive"}>
      {rowData.verified ? "Yes" : "No"}
    </span>
  );

  const servicesAreaTemplate = (rowData) =>
    rowData.servicesArea.length > 0
      ? rowData.servicesArea.map((area) => area.name.en).join(", ")
      : "N/A";
  const handleDelete = useCallback(
    (id) => {
      dispatch(getDeleteUser(id)).then(() => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Property deleted successfully",
          life: 3000,
        });
        const limit = 200;
        dispatch(getAgencies(limit));
      });
    },
    [dispatch]
  );
  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <NavLink to={`/InfoUser/${rowData._id}`} className="info_btn">
        <AiOutlineInfoCircle />
      </NavLink>
      <button className="del_btn" onClick={() => handleDelete(rowData._id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
   

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Agencies</h3>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getAgenciesData || []}
            dataKey="_id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="No data available"
            totalRecords={getAgenciesData?.length || 0}
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column header="Services Area" body={servicesAreaTemplate} />
            <Column
              field="verified"
              header="Verified"
              body={verifiedBodyTemplate}
            />
            <Column
              header="Actions"
              body={StateBody}
              style={{ maxWidth: "10rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
