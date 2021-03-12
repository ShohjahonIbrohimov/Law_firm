import React from "react";
import styles from "../../styles/News.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { startCrudNews } from "../../redux/news/news.actions";

const NewsSection = ({ news, setdefaults, setopen }) => {
  const dispatch = useDispatch();

  const afterSuccess = () => {
    dispatch(
      startCrudNews({
        method: "GET",
        url: "api/news/getAll",
        data: "",
        afterSuccess: () => {},
      })
    );
    toast.success("Yangilik o'çhirildi");
  };

  const handleDelete = () => {
    dispatch(
      startCrudNews({
        method: "DELETE",
        url: `api/news/${news._id}`,
        data: "",
        afterSuccess: () => afterSuccess(),
      })
    );
  };

  const handleEdit = () => {
    setdefaults(news);
    setopen(true);
  };

  return (
    <>
      <Card
        hoverable
        actions={[
          <DeleteOutlined onClick={handleDelete} key='setting' />,
          <EditOutlined key='edit' onClick={handleEdit} />,
        ]}
      >
        <div style={{ display: "flex" }}>
          <div className={styles.news_image}></div>
          <Link to={`/news/${news._id}`}>
            <p>{news.title}</p>
          </Link>
        </div>
      </Card>
      <Toaster />
    </>
  );
};

export default NewsSection;
