import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect } from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { getChildrenLocation } from "../store/LocationsSlice";
import Loader from "../components/layouts/loading/loading";
import { FiEdit } from "react-icons/fi";

const RegionsAdd = React.lazy(() =>
  import("../components/locations/RegionsAdd")
);

const Region = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getChildrenLocationData } = useSelector(
    (state) => state.LocationsSlice
  );
  const [selectedRegions, setSelectedRegions] = useState(null);

  const [visible, setVisible] = useState(false);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    dispatch(getChildrenLocation(id));
  }, [dispatch, id]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        onClick={() => {
          setSelectedRegions(rowData);
          setVisible(true);
        }}
        className="edite_btn"
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
      <div className="title_page">
        <h3>Regions</h3>
        <button
          className="add_btn"
          onClick={() => {
            setSelectedRegions(null);
            setVisible(true);
          }}
        >
          add Regions
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getChildrenLocationData || []}
            paginator
            first={first}
            rows={rows}
            rowsPerPageOptions={[5, 10, 20, 50]}
            onPage={onPageChange}
            dataKey="id"
            className={styles.dataTabel}
            responsiveLayout="scroll"
            stripedRows
            emptyMessage="no data "
            totalRecords={getChildrenLocationData?.length || 0}
          >
            <Column header="add Regions" body={InfoBody} style={{ maxWidth: "5rem" }} />
            <Column field="name.en" header="Name en" />
            <Column field="name.ar" header="Name ar" />
            <Column header=" " body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <RegionsAdd
          visible={visible}
          setVisible={setVisible}
          id={id}
          selectedRegions={selectedRegions}
        />
      </Suspense>
    </div>
  );
};

export default Region;
