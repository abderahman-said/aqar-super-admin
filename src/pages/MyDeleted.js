import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState, Suspense } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropertiesAdmin,
  getRestoreProperties,
} from "../store/LocationsSlice";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { Paginator } from "primereact/paginator";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { TabView, TabPanel } from "primereact/tabview";

// Lazy load components
const DelAgent = React.lazy(() => import("../components/DelAgent"));
const DelAgencies = React.lazy(() => import("../components/DelAgencies"));
const DelAdmins = React.lazy(() => import("../components/DelAdmins"));

const MyDeleted = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getPropertiesAdminData } = useSelector(
    (state) => state.LocationsSlice
  );

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const page = Math.floor(first / rows) + 1;
    const state = true;
    dispatch(getPropertiesAdmin({ page, limit: rows, state }));
  }, [dispatch, first, rows]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleRestore = useCallback(
    (id) => {
      dispatch(getRestoreProperties(id)).then(() => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Property restored successfully",
          life: 3000,
        });
        const page = Math.floor(first / rows) + 1;
        const state = true;
        dispatch(getPropertiesAdmin({ page, limit: rows, state }));
      });
    },
    [dispatch, first, rows]
  );

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <NavLink to={`/InfoAds/${rowData.id}`} className="info_btn">
        <AiOutlineInfoCircle />
      </NavLink>
      <button className="add_btn_2" onClick={() => handleRestore(rowData.id)}>
        <MdOutlineSettingsBackupRestore /> Restore
      </button>
    </div>
  );

  const ImagesBody = (rowData) => (
    <div className="images-container">
      <Image
        src={rowData.images[0]?.link}
        zoomSrc={rowData.images[0]?.link}
        alt="Property"
        className="property-thumbnail"
        width="50"
        height="50"
        preview
      />
    </div>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>My Deleted</h3>
      </div>
      <TabView>
        <TabPanel header="My Ads">
          <DataTable
            value={getPropertiesAdminData || []}
            dataKey="_id"
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="No data available"
            totalRecords={120}
          >
            <Column field="title.en" header="Title" />
            <Column field="price" header="Price" />
            <Column field="currency.name.en" header="Currency" />
            <Column field="owner.name" header="Owner Name" />
            <Column field="rooms" header="Rooms" />
            <Column field="bathrooms" header="Bathrooms" />
            <Column field="space" header="Space (sq. m)" />
            <Column
              header="Images"
              body={ImagesBody}
              style={{ maxWidth: "7rem" }}
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
        </TabPanel>
        <TabPanel header="Admins">
          <Suspense fallback={<div>Loading Admins...</div>}>
            <DelAdmins />
          </Suspense>
        </TabPanel>
        <TabPanel header="Agents">
          <Suspense fallback={<div>Loading Agents...</div>}>
            <DelAgent />
          </Suspense>
        </TabPanel>
        <TabPanel header="Agencies">
          <Suspense fallback={<div>Loading Agencies...</div>}>
            <DelAgencies />
          </Suspense>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default MyDeleted;
