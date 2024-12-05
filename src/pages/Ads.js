import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeleteProperties, getProperties } from "../store/LocationsSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import { Paginator } from "primereact/paginator";

const Ads = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getPropertiesData } = useSelector((state) => state.LocationsSlice);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    const page = Math.floor(first / rows) + 1; // Calculate page based on first and rows
    dispatch(getProperties({ page, limit: rows }));
  }, [dispatch, first, rows]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const handleDelete = useCallback(
    (id) => {
      dispatch(getDeleteProperties(id)).then(() => {
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Property deleted successfully",
          life: 3000,
        });
        const page = Math.floor(first / rows) + 1;
        dispatch(getProperties({ page, limit: rows }));
      });
    },
    [dispatch, first, rows]
  );

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <NavLink to={`/InfoAds/${rowData.id}`} className="info_btn">
        <AiOutlineInfoCircle />
      </NavLink>
      <button className="del_btn" onClick={() => handleDelete(rowData.id)}>
        <RiDeleteBin6Line />
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
  const stateBodyTemplate = (rowData) => (
    <span className={rowData.verified ? "active" : "noactive"}>
      {rowData.verified ? "active" : "no active"}
    </span>
  );
  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Properties</h3>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getPropertiesData || []}
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
            <Column field="activeSubscription" header="state" body={stateBodyTemplate} />
             <Column header="Images" body={ImagesBody} style={{ maxWidth: "7rem" }} />
            <Column header="Actions" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={120} // Adjust based on the API's total record count
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Ads;
