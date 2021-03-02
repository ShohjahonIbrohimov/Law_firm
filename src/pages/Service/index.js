import React, { useState, useEffect } from "react";
import styles from "../../styles/Service.module.css";
import service1 from "../../assets/SERVICES/Service1.json";
import service2 from "../../assets/SERVICES/Service2.json";
import service3 from "../../assets/SERVICES/Service3.json";
import services from "../../assets/services.json";
import { useParams } from "react-router-dom";
import ServiceType from "../../components/ServiceType";

const Service = () => {
  const params = useParams();
  const [service, setservice] = useState(0);
  const [categories, setCategories] = useState(services[0].categories);
  const [saveToDb, setSaveToDb] = useState(false);

  useEffect(() => {
    const currentService = services?.filter((s) => s.id == params.id)[0];
    setservice(currentService);
    console.log(currentService, params.id);
  }, [services, params.id]);

  const handleAddType = () => {
    setCategories([
      ...categories,
      {
        name: "Sth",
        data: "<h1>SUCCESS</h1>",
        number: categories[categories.length - 1].number + 1,
      },
    ]);
  };

  const handleDelete = (num) => {
    setCategories(categories.filter((c) => c.number !== num));
  };

  return (
    <div className={styles.service_wrapper}>
      <div className={styles.service_header}>
        <h2 className={styles.service_title}>{service?.service?.title}</h2>
        <div className={styles.header_actions}>
          <button
            onClick={() => setSaveToDb(true)}
            className='glb_btn'
            style={{ marginRight: "0.5rem" }}
          >
            Saqlash
          </button>
          <button onClick={handleAddType} className='glb_btn'>
            <i class='bx bx-plus bx-sm'></i>
          </button>
        </div>
      </div>
      {categories.map((c) => {
        return (
          <ServiceType saveToDb={saveToDb} handleDelete={handleDelete} category={c} data={c.data} />
        );
      })}
    </div>
  );
};

export default Service;
