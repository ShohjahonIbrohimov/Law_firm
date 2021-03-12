import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import News from "./News";
import OurStaff from "./OurStaff";
import NewsAddForm from "./NewsAddForm";
import { useDispatch, useSelector } from "react-redux";
import { startCrudService } from "../../redux/ourServices/service.actions";
import { startCrudNews } from "../../redux/news/news.actions";
import Modal from "../Modal";
import Services from "../OurService/Services";

const Main = () => {
  const services = useSelector((state) => state.services);
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      startCrudNews({
        method: "GET",
        url: "api/news/getAll",
        data: "",
        afterSuccess: () => {},
      })
    );
  }, []);

  const handleAddServices = () => {
    dispatch(
      startCrudService({
        url: "api/services",
        method: "POST",
        data: { title: "VHKZ", category: [], number: 12 },
      })
    );
  };
  return (
    <div className={styles.home_contents_wrapper}>
      <div className={styles.content1}>
        <section className={styles.ourstaff_section}>
          <OurStaff />
        </section>
        <section className={styles.services_section}>
          <Services />
        </section>
      </div>
      <div className={styles.news}>
        <News setopen={setopen} open={open} />
      </div>
      <button className='glb_btn send_question_btn'>
        Savol yuborish
        <i class='bx bxs-chevron-right'></i>
      </button>
    </div>
  );
};

export default Main;
