import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Paginator } from "primereact/paginator";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { getAgenciesDeleted, RestoreUser } from "../store/PropertySlice";

const DelAgencies = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  const { getAgenciesDeletedData } = useSelector(
    (state) => state.PropertySlice
  );

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const page = Math.floor(first / rows) + 1;
    const state = true;
    dispatch(getAgenciesDeleted({ page, state }));
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
        const state = true;
        dispatch(getAgenciesDeleted({ page, state }));
      });
    },
    [dispatch, first, rows]
  );

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <NavLink to={`/InfoAds/${rowData._id}`} className="info_btn">
        <AiOutlineInfoCircle />
      </NavLink>
      <button className="add_btn_2" onClick={() => handleRestore(rowData._id)}>
        <MdOutlineSettingsBackupRestore /> Restore
      </button>
    </div>
  );

  return (
    <>
      <Toast ref={toast} />
      <DataTable
        value={getAgenciesDeletedData || []}
        dataKey="_id"
        className={styles.dataTabel}
        responsiveLayout="scroll"
        stripedRows
        emptyMessage="No data available"
        totalRecords={120}
      >
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="phone" header="Phone" />
        <Column field="role" header="Role" />
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

export default DelAgencies;
