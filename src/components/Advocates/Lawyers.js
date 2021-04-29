import React from "react";
import StaffCard from "./StaffCard";
import staff from "../../assets/staff.json";
import styles from "../../styles/StaffCard.module.css";

const Lawyers = () => {
  return (
    <div className={styles.staffs_box}>
      {staff
        .filter((s) => s.type === "lawyer" || s.type === "mediatorLawyer")
        .map((s) => (
          <StaffCard staff={s} />
        ))}
    </div>
  );
};

export default Lawyers;
