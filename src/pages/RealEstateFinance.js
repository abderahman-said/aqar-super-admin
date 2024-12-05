import { DataTable } from "primereact/datatable";
import { SelectButton } from "primereact/selectbutton";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRealEstateFinance,
  getRealEstateFinances,
} from "../store/LocationsSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
const RealEstateFinanceAdd = React.lazy(() =>
  import("../components/locations/RealEstateFinanceAdd")
);

const RealEstateFinance = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getRealEstateFinancesData } = useSelector(
    (state) => state.LocationsSlice
  );

  const [visible, setVisible] = useState(false);
  const [selectedRealEstateFinance, setSelectedRealEstateFinance] =
    useState(null);
  const [first, setFirst] = useState(0); // Keeps track of the first item (pagination start index)
  const [rows, setRows] = useState(10); // Number of rows per page
  const [status, setStatus] = useState("all");
  const statusOptions = [
    "all",
    "approved",
    "pending",
    "connecting",
    "rejected",
  ];

  // Effect to fetch data whenever pagination changes or on initial load
  useEffect(() => {
    // Fetch data when the status or rows change, including status in the API request
    dispatch(getRealEstateFinances({ page: 1, limit: rows, status }));
  }, [dispatch, status, rows]);
  // Handle page change
  const onPageChange = (e) => {
    setFirst(e.first); // The start index of the current page
    setRows(e.rows); // The number of rows per page
    dispatch(
      getRealEstateFinances({ page: e.page + 1, limit: e.rows, status }) // Pass status here
    );
  };
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteRealEstateFinance(id))
        .then(() => {
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Deleted successfully",
            life: 3000,
          });
          dispatch(getRealEstateFinances({ page: 1, limit: rows, status }));
        })
        .catch(() => {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Failed to Deleted",
            life: 3000,
          });
        });
    },
    [dispatch, rows]
  );
  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <NavLink to={`/ViewRealEstateFinance/${rowData._id}`} className="info_btn">
        <AiOutlineInfoCircle />
      </NavLink>
      <button
        className="edite_btn"
        onClick={() => {
          setSelectedRealEstateFinance(rowData);
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
        <h3>Real Estate Finances</h3>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <SelectButton
            value={status}
            onChange={(e) => setStatus(e.value)}
            options={statusOptions}
            className="mb-4"
          />
          <DataTable
            value={getRealEstateFinancesData || []}
            dataKey="id"
            first={first}
            paginator
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="No data"
            totalRecords={getRealEstateFinancesData?.length || 0}
          >
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="status" header="Status" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <RealEstateFinanceAdd
          visible={visible}
          setVisible={setVisible}
          selectedRealEstateFinance={selectedRealEstateFinance}
          rows={rows}
          status={status}
        />
      </Suspense>
    </div>
  );
};
export default RealEstateFinance;
