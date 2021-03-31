import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import News from "./News";
import OurStaff from "./OurStaff";
import Services from "../OurService/Services";
import { Affix, Badge, Button, Space } from "antd";
import AskQuestionDrawer from "../AskQuestion/AskQuestionDrawer";
import toast, { Toaster } from "react-hot-toast";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { startCrudService } from "../../redux/ourServices/service.actions";
import { startCrudNews } from "../../redux/news/news.actions";

const Main = () => {
  const services = useSelector((state) => state.services);
  const token = useSelector((state) => state.authReducer.token);
  const [open, setopen] = useState(false);
  const [questionVisible, setquestionVisible] = useState(false);
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

  const handleOpenQuestionDrawer = () => {
    if (token) {
      setquestionVisible(true);
    } else {
      toast.error(
        (t) => (
          <span>
            <Space>
              <span>
                Savol yuborish uchun ro'yxatdan o'ting yoki kabinetingizga
                kiring
              </span>
              <Button
                type='primary'
                size='small'
                className='login-form-button'
                onClick={() => toast.dismiss(t.id)}
              >
                Yopish
              </Button>
            </Space>
          </span>
        ),
        {
          duration: 6000,
        }
      );
    }
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
      <span
        className='send_question_wrapper'
        onClick={handleOpenQuestionDrawer}
      >
        <Badge status='processing' size='large' color='#1a4c6d' />
        <span className='send_question_content'>
          <span>Savol</span>
          <i class='bx bxl-telegram bx-sm'></i>
        </span>
      </span>
      <AskQuestionDrawer
        visible={questionVisible}
        setvisible={setquestionVisible}
      />
    </div>
  );
};

export default Main;
