import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getadmins, getDeleteUser } from "../store/LocationsSlice";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Paginator } from "primereact/paginator";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "../styles/Tabel.module.css";
import Loader from "../components/layouts/loading/loading";
import { FiEdit } from "react-icons/fi";
const AdminsAdd = React.lazy(() => import("../components/locations/AdminsAdd"));
const Admins = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getadminsData } = useSelector((state) => state.LocationsSlice);
  const [visible, setVisible] = useState(false);
  const [selectedAdmins, setselectedAdmins] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  // Initial fetch and pagination handling
  useEffect(() => {
    const page = Math.floor(first / rows) + 1;
    const state = false;
    dispatch(getadmins({ page, limit: rows, state }));
  }, [dispatch, first, rows]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleDelete = useCallback(
    (id) => {
      dispatch(getDeleteUser(id))
        .then(() => {
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Agent deleted successfully",
            life: 3000,
          });
          const state = false;
          dispatch(
            getadmins({
              page: Math.floor(first / rows) + 1,
              limit: rows,
              state,
            })
          );
        })
        .catch(() => {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to delete agent",
            life: 3000,
          });
        });
    },
    [dispatch, first, rows]
  );

  const verifiedBodyTemplate = (rowData) => (
    <span className={rowData.verified ? "active" : "noactive"}>
      {rowData.verified ? "Yes" : "No"}
    </span>
  );

  const actionBodyTemplate = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setselectedAdmins(rowData);
          setVisible(true);
        }}
      >
        <FiEdit />
      </button>
      <button className="del_btn" onClick={() => handleDelete(rowData._id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Admins</h3>
        <button
          className="add_btn"
          onClick={() => {
            setselectedAdmins(null);
            setVisible(true);
          }}
        >
          Add Admins
        </button>
      </div>

      <div className="Table_container">
        <div className={styles.Table} id="tableFirstItemStart">
          <DataTable
            value={getadminsData || []}
            dataKey="_id"
            className={styles.dataTable}
            responsiveLayout="scroll"
            emptyMessage="No data available"
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            {/* <Column field="gender" header="gender" /> */}
            <Column
              field="verified"
              header="Verified"
              body={verifiedBodyTemplate}
            />
            <Column
              header="Actions"
              body={actionBodyTemplate}
              style={{ maxWidth: "10rem" }}
            />
          </DataTable>
        </div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <AdminsAdd
          visible={visible}
          setVisible={setVisible}
          selectedAdmins={selectedAdmins}
          first={first}
          rows={rows}
        />
      </Suspense>
    </div>
  );
};

export default Admins;
