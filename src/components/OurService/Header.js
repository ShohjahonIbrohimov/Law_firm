import React, { useState } from "react";
import styles from "../../styles/Service.module.css";
import { useDispatch, useSelector } from "react-redux";

const Header = ({
  handleAddType,
  handleSaveService,
  serviceTitle,
  setserviceTitle,
  service,
  save,
  setsave,
}) => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div className={styles.service_header}>
      <input
        className={`${styles.title} ${save ? styles.title_done_edit : ""}`}
        value={serviceTitle}
        onChange={(e) => setserviceTitle(e.target.value)}
        style={{ width: "100%" }}
      />
      {user?.role === "manager" && (
        <div className={styles.header_actions}>
          <button
            onClick={handleSaveService}
            className='glb_btn'
            style={{ marginRight: "0.5rem" }}
          >
            Saqlash
          </button>
          <button onClick={handleAddType} className='glb_btn'>
            <i class='bx bx-plus bx-sm'></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
