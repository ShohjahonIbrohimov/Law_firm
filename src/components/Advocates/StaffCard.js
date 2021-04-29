import React from "react";
import styles from "../../styles/StaffCard.module.css";
import { Avatar } from "antd";

const StaffCard = ({ staff }) => {
  return (
    <div className={styles.card}>
      <Avatar
        src={staff.pic}
        className={styles.image}
        style={{ width: "150px", height: "150px" }}
      />

      <h3>{staff.fullName}</h3>
      <p>{staff.about}</p>
    </div>
  );
};

export default StaffCard;
