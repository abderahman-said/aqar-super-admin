import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { Paginator } from "primereact/paginator";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import {  RestoreUser } from "../store/PropertySlice";
import { getadmins } from "../store/LocationsSlice";

const DelAdmins = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getadminsData } = useSelector((state) => state.LocationsSlice);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const page = Math.floor(first / rows) + 1;
    const state  = true
    dispatch(getadmins({ page, limit: rows ,state }));
  }, [dispatch, first, rows]);


  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleRestore = useCallback(
    (_id) => {
      dispatch(RestoreUser(_id)).then(() => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Property restored successfully",
          life: 3000,
        });
        const page = Math.floor(first / rows) + 1;
        const state  = true
        dispatch(getadmins({ page, limit: rows ,state }));
      });
    },
    [dispatch, first, rows]
  );

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button className="add_btn_2" onClick={() => handleRestore(rowData._id)}>
        <MdOutlineSettingsBackupRestore /> Restore
      </button>
    </div>
  );

  const verifiedBodyTemplate = (rowData) => (
    <span className={rowData.verified ? "active" : "noactive"}>
      {rowData.verified ? "Yes" : "No"}
    </span>
  );

  return (
    <>
      <Toast ref={toast} />
      <DataTable
            value={getadminsData || []}
            dataKey="_id"
            className={styles.dataTable}
            responsiveLayout="scroll"
            emptyMessage="No data available"
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
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
          <Paginator
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
    </>
  );
};

export default DelAdmins;
