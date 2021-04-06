import React from "react";
import styles from "../../styles/ServiceCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  startCrudService,
  addService,
} from "../../redux/ourServices/service.actions";

const ServiceCard = ({ data }) => {
  const dispatch = useDispatch();

  console.log(data);
  const afterSuccess = () => {
    dispatch(
      startCrudService({
        url: "api/services/getAll",
        method: "GET",
        data: "",
        afterSuccess: () => {},
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      startCrudService({
        url: `api/services/${data._id}`,
        method: "DELETE",
        data: "",
        afterSuccess: () => afterSuccess(),
      })
    );
  };

  return (
    <div className={styles.service_card}>
      <h6 className={styles.title}>{data.title}</h6>
      <div className={styles.service_types}>
        {data.category.map((c) => {
          return (
            <p>
              <Link to={`/service/${data._id}`}>- {c.title}</Link>
            </p>
          );
        })}
      </div>
      <div className={`${styles.delete}`} onClick={handleDelete}>
        <i style={{ color: "white" }} className='bx bxs-trash-alt'></i>
      </div>
      <Link to={`/service/${data._id}`} className={styles.edit}>
        <i className='bx bxs-edit bx-xs' style={{ color: "white" }}></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
