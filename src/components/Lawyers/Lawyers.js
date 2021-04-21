import React from "react";
import StaffCard from "./StaffCard";
import staff from "../../assets/staff.json";
import styles from "../../styles/StaffCard.module.css";

const Lawyers = () => {
  return (
    <div className={styles.staffs_box}>
      {staff.map((s) => (
        <StaffCard staff={s} />
      ))}
    </div>
  );
};

export default Lawyers;
