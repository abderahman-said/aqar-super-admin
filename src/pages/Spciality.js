import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
 import { RiDeleteBin6Line } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
import { deleteSpciality, getSpciality } from "../store/LocationsSlice";
const SpcialityAdd = React.lazy(() =>
  import("../components/locations/SpcialityAdd")
);

const Spciality = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getSpcialityData } = useSelector((state) => state.LocationsSlice);
  const [visible, setVisible] = useState(false);
  const [selectedSpciality, setselectedSpciality] = useState(null); // New state for selected emirate
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getSpcialityData) {
      dispatch(getSpciality());
    }
  }, [dispatch, getSpcialityData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteSpciality(id)).unwrap();
      toast.current.show({ severity: "success", summary: "Deleted", detail: "Language deleted successfully" });
      dispatch(getSpciality());   
    } catch (error) {
      toast.current.show({ severity: "error", summary: "Error", detail: error.message });
    }
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setselectedSpciality(rowData);
          setVisible(true);
        }}
      >
        <FiEdit />
      </button>
      <button
        className="del_btn"
        onClick={() => handleDelete(rowData.id)}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );

  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="title_page">
        <h3>Spciality</h3>
        <button
          className="add_btn"
          onClick={() => {
            setselectedSpciality(null);
            setVisible(true);
          }}
        >
          Add Spciality
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getSpcialityData || []}
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
            totalRecords={getSpcialityData?.length || 0}
          >
            <Column field="name.en" header="Name en" />
            <Column field="name.ar" header="Name ar" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <SpcialityAdd
          visible={visible}
          setVisible={setVisible}
          selectedSpciality={selectedSpciality}
        />
      </Suspense>
    </div>
  );
};

export default Spciality;
