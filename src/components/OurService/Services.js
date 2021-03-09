import React from "react";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import styles from "../../styles/Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  startCrudService,
  addService,
} from "../../redux/ourServices/service.actions";

const Services = ({ handleAddServices }) => {
  const services = useSelector((state) => state.serviceReducer.services);
  const dispatch = useDispatch();

  const afterSuccess = () => {
    dispatch(
      startCrudService({
        url: "api/services/getAll",
        method: "GET",
        data: "",
      })
    );
  };

  const handleAddService = () => {
    dispatch(
      startCrudService({
        url: "api/services",
        method: "POST",
        data: {
          title: "Unknown",
          category: [],
          number: !services.length ? 1 : services.length + 1,
        },
        afterSuccess,
      })
    );
  };

  const handleSaveServices = () => {};
  return (
    <div>
      <div className='section_title_wrapper'>
        <h3 className='section_title'>Bizning xizmatlar</h3>

        <button className='glb_btn' onClick={handleAddService}>
          <i class='bx bx-plus-circle bx-sm'></i>
        </button>
      </div>
      <div className={styles.services}>
        {services.map((s) => (
          // <Link to={`/service/${s.number}`}>
          <ServiceCard data={s} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
