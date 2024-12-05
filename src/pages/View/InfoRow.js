import React from "react";

const InfoRow = ({ label, value, isActive, isBinary }) => {
  const className = isBinary ? (isActive ? "active" : "noactive") : "";

  return (
    <div className=" flex align-items-center w-100 justify-content-between gap-3">
      <h5>{label}</h5>
      <h6 className={className}>{value}</h6>
    </div>
  );
};
export default InfoRow;
