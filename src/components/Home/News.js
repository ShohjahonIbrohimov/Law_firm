import React, { useState } from "react";
import NewsSection from "./NewsSection";
import styles from "../../styles/Home.module.css";
import { Space } from "antd";
import NewsAddForm from "./NewsAddForm";
import Modal from "../Global/GModal";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const News = ({ setopen, open }) => {
  const news = useSelector((state) => state.newsReducer.news);
  const [defaults, setdefaults] = useState(null);

  return (
    <div className={styles.news}>
      <Modal open={open} setopen={setopen} width={1000}>
        <NewsAddForm defaults={defaults} />
      </Modal>

      <Button
        onClick={() => setopen(true)}
        type='primary'
        icon={<PlusOutlined />}
        size='large'
        style={{ marginBottom: "1rem" }}
      >
        Huquqiy yangiliklar
      </Button>
      <Space direction='vertical' style={{ width: "100%" }}>
        {news.map((n) => (
          <NewsSection setdefaults={setdefaults} news={n} setopen={setopen} />
        ))}
      </Space>
    </div>
  );
};

export default News;
