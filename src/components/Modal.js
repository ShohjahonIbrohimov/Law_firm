import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ open, setopen, children, width }) => {
  return (
    <div className={open ? "modal_wrapper" : "hide_modal"}>
      <div style={{ width: `${width}%` }} className={styles.content}>
        {children}
        <div className={styles.exit} onClick={() => setopen(false)}>
          <i class='bx bx-x'></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
