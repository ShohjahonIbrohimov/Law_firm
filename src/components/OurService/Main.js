import ServiceType from "./ServiceType";
import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/Service.module.css";
import { useParams } from "react-router-dom";
import { ServicesContext } from "../../context/ServicesContext";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateService,
  startCrudService,
} from "../../redux/ourServices/service.actions";

const Main = () => {
  const params = useParams();
  const services = useSelector((state) => state.serviceReducer.services);
  const [service, setservice] = useState({ category: [] });
  const [saveToDb, setSaveToDb] = useState(false);
  const [serviceTitle, setserviceTitle] = useState("");
  const [save, setsave] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentService = services?.filter((s) => s._id === params.id)[0];
    setservice(currentService);
    setserviceTitle(currentService.title);
  }, [services, params.id]);

  // ADD CATEGORY
  const handleAddType = () => {
    let ctgData = {
      title: "",
      content: "",
      number: !service.category.length ? 1 : service.category.length + 1,
    };
    setservice({
      ...service,
      category: [...service.category, ctgData],
    });
  };

  // DELETE CATEGORY
  const handleDelete = (num) => {
    setservice({
      ...service,
      category: service.category.filter((c) => c.number !== num),
    });
  };

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
  const handleSaveService = (params) => {
    setSaveToDb(true);
    service.title = serviceTitle;
    dispatch(
      startCrudService({
        url: `api/services/${service._id}`,
        method: "PATCH",
        data: service,
        afterSuccess: () => afterSuccess(),
      })
    );
  };

  const handleUpdate = (title, content, number) => {
    let ctgData = {
      title,
      content,
      number,
    };
    setservice({
      ...service,
      category: [
        ...service.category.filter((c) => c.number !== number),
        ctgData,
      ],
    });
  };

  return (
    <div className={styles.service_wrapper}>
      <Header
        handleAddType={handleAddType}
        service={service}
        handleSaveService={handleSaveService}
        serviceTitle={serviceTitle}
        setserviceTitle={setserviceTitle}
        service={service}
        save={save}
      />
      {service.category.map((c) => {
        return (
          <ServiceType
            saveToDb={saveToDb}
            handleDelete={handleDelete}
            category={c}
            handleUpdate={handleUpdate}
            save={save}
            setsave={setsave}
          />
        );
      })}
    </div>
  );
};

export default Main;
