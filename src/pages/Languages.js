import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLang, getLanguages } from "../store/LocationsSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../components/layouts/loading/loading";
const LanguagesAdd = React.lazy(() =>
  import("../components/locations/LanguagesAdd")
);

const Languages = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getLanguagesData } = useSelector((state) => state.LocationsSlice);
  const [visible, setVisible] = useState(false);
  const [selectedLanguages, setselectedLanguages] = useState(null); 
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    if (!getLanguagesData) {
      dispatch(getLanguages());
    }
  }, [dispatch, getLanguagesData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteLang(id)).unwrap();
      toast.current.show({ severity: "success", summary: "Deleted", detail: "Language deleted successfully" });
      dispatch(getLanguages());   
    } catch (error) {
      toast.current.show({ severity: "error", summary: "Error", detail: error.message });
    }
  };

  const StateBody = (rowData) => (
    <div className="StatusBtn">
      <button
        className="edite_btn"
        onClick={() => {
          setselectedLanguages(rowData);
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
        <h3>Languages</h3>
        <button
          className="add_btn"
          onClick={() => {
            setselectedLanguages(null);
            setVisible(true);
          }}
        >
          Add Languages
        </button>
      </div>
      <div className="Tabel_container">
        <div className={styles.Tabel} id="tableFirstItemStart">
          <DataTable
            value={getLanguagesData || []}
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
            totalRecords={getLanguagesData?.length || 0}
          >
            <Column field="name.en" header="Name en" />
            <Column field="name.ar" header="Name ar" />
            <Column header="" body={StateBody} style={{ maxWidth: "10rem" }} />
          </DataTable>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <LanguagesAdd
          visible={visible}
          setVisible={setVisible}
          selectedLanguages={selectedLanguages}
        />
      </Suspense>
    </div>
  );
};

export default Languages;
