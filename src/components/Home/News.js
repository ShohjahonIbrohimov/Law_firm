import React, { useState } from "react";
import NewsSection from "./NewsSection";
import styles from "../../styles/Home.module.css";
import { Card, Space } from "antd";
import NewsAddForm from "./NewsAddForm";
import Modal from "../Modal";
import { useSelector } from "react-redux";
const News = ({ setopen, open }) => {
  const news = useSelector((state) => state.newsReducer.news);
  const [defaults, setdefaults] = useState(null);
  const afterSuccess = () => {};

  return (
    <div className={styles.news}>
      <Modal open={open} setopen={setopen}>
        <NewsAddForm defaults={defaults} />
      </Modal>
      <div className='section_title_wrapper'>
        <h3 className='section_title'>Huquqiy yangiliklar</h3>
        <button className='glb_btn' onClick={() => setopen(true)}>
          <i class='bx bx-plus-circle bx-sm'></i>
        </button>
      </div>

      <Space direction='vertical' style={{ width: "100%" }}>
        {news.map((n) => (
          <NewsSection setdefaults={setdefaults} news={n} setopen={setopen} />
        ))}
      </Space>
    </div>
  );
};

export default News;
