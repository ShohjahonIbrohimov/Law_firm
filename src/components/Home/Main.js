import React, { useState, useContext } from "react";
import styles from "../../styles/Home.module.css";
import News from "./News";
import OurStaff from "./OurStaff";
import NewsAddForm from "./NewsAddForm";
import { useDispatch, useSelector } from "react-redux";
import { startCrudService } from "../../redux/ourServices/service.actions";
import Modal from "../Modal";
import Services from "../OurService/Services";

const Main = () => {
  const services = useSelector((state) => state.services);
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();

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
      <Modal open={open} setopen={setopen}>
        <NewsAddForm />
      </Modal>
      <div className={styles.content1}>
        <section className={styles.ourstaff_section}>
          <OurStaff />
        </section>
        <section className={styles.services_section}>
          <Services />
        </section>
      </div>
      <div className={styles.news}>
        <News />
      </div>
      <button className='glb_btn send_question_btn'>
        Savol yuborish
        <i class='bx bxs-chevron-right'></i>
      </button>
    </div>
  );
};

export default Main;
