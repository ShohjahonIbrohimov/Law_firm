import React from "react";
import StaffCard from "./StaffCard";
import staff from "../../assets/staff.json";
import styles from "../../styles/StaffCard.module.css";

const Lawyers = () => {
  return (
    <div className={styles.staffs_box}>
      {staff
        .filter((s) => s.type.toLocaleLowerCase().indexOf("advokat") >= 0)
        .map((s) => (
          <StaffCard staff={s} />
        ))}
    </div>
  );
};

export default Lawyers;
