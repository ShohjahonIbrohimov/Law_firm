import React from "react";
import styles from "../styles/ServiceCard.module.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div className={styles.service_card}>
      <h6 className={styles.title}>{data.service.title}</h6>
      <div className={styles.service_types}>
        {data.service?.types.map((s) => {
          return (
            <p>
              <Link to={`/service/${data.id}`}>- {s.title}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
