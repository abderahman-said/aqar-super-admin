import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import styles from "../../styles/Tabel.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Toast } from "primereact/toast";
import { FiEdit } from "react-icons/fi";

import Loader from "../../components/layouts/loading/loading";
import {
  deletePropertiesGrop,
  getPropertiesGrop,
} from "../../store/PropertySlice";
import { Image } from "primereact/image";
const PropertiesAdd = React.lazy(() =>
  import("../../components/locations/PropertiesAdd")
);

const Properties = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const { getPropertiesGropData } = useSelector((state) => state.PropertySlice);
  const [visible, setVisible] = useState(false);
  const [selectedSpciality, setselectedSpciality] = useState(null);
  const [selectedType, setselectedType] = useState(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
console.log("selectedType" ,selectedType)
  useEffect(() => {
    if (!getPropertiesGropData) {
      dispatch(getPropertiesGrop());
    }
  }, [dispatch, getPropertiesGropData]);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };
  const handleDelete = async (id) => {
    try {
      await dispatch(deletePropertiesGrop(id)).unwrap();
      toast.current.show({
        severity: "success",
        summary: "Deleted",
        detail: "Language deleted successfully",
      });
      dispatch(getPropertiesGrop());
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error.message,
      });
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
      <button className="del_btn" onClick={() => handleDelete(rowData._id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
  const ImagesBody = (rowData) => (
    <div className="images-container">
      <Image
        src={rowData.logo?.link}
        zoomSrc={rowData.logo?.link}
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
      {getPropertiesGropData?.map((ele, idx) => (
        <div key={idx}>
          <div className="title_page  mt-3">
            <h3>{ele.type}</h3>
            <button
              className="add_btn"
              onClick={() => {
                setselectedSpciality(null);
                setVisible(true);
                setselectedType(ele.type);
              }}
            >
              Add {ele.type}
            </button>
          </div>
           
          <div className="Tabel_container">
            <div className={styles.Tabel} id="tableFirstItemStart">
              <DataTable
                value={ele.properties || []}
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
                totalRecords={ele.properties?.length || 0}
              >
                <Column field="name.en" header="Name en" />
                <Column field="name.ar" header="Name ar" />
                {ele.type === "amenity" ? (
                  <Column field="logo" body={ImagesBody} header="logo" />
                ) : null}

                <Column
                  header=""
                  body={StateBody}
                  style={{ maxWidth: "10rem" }}
                />
              </DataTable>
            </div>
          </div>
        </div>
      ))}

      <Suspense fallback={<Loader />}>
        <PropertiesAdd
          visible={visible}
          setVisible={setVisible}
          selectedSpciality={selectedSpciality}
          selectedType={selectedType}
        />
      </Suspense>
    </div>
  );
};

export default Properties;
