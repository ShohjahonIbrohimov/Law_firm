import React from "react";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
import styles from "../../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { startCrudService } from "../../redux/ourServices/service.actions";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Services = ({ handleAddServices }) => {
  const services = useSelector((state) => state.serviceReducer.services);
  const user = useSelector((state) => state.authReducer.user);

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

  return (
    <div>
      <Button
        onClick={user?.role === "manager" ? handleAddService : () => ""}
        type='primary'
        icon={user?.role === "manager" && <PlusOutlined />}
        size='large'
        style={{ marginBottom: "1rem" }}
      >
        Bizning xizmatlar
      </Button>

      <div className={styles.services}>
        {services.map((s) => (
          <ServiceCard data={s} />
        ))}
      </div>
    </div>
  );
};

export default Services;
