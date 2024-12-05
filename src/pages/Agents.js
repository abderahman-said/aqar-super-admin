import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgents, getDeleteUser } from "../store/LocationsSlice";
import { Toast } from "primereact/toast";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Agents = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  const { getAgentsData } = useSelector((state) => state.LocationsSlice);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleDelete = useCallback(
    (id) => {
      dispatch(getDeleteUser(id)).then(() => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Agent deleted successfully",
          life: 3000,
        });
        dispatch(getAgents());
      });
    },
    [dispatch]
  );

  const verifiedBodyTemplate = (rowData) => (
    <span className={rowData.verified ? "active" : "noactive"}>
      {rowData.verified ? "Yes" : "No"}
    </span>
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
        <h3>Agents</h3>
      </div>
      <div className="Table_container">
        <div className={styles.Table} id="tableFirstItemStart">
          <DataTable
            value={getAgentsData || []}
            dataKey="_id"
            paginator
            first={first}
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTable}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="No data available"
            totalRecords={getAgentsData?.length || 0}
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column field="views" header="Views" />
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

      {/* Edit Agent Dialog */}
    </div>
  );
};

export default Agents;
