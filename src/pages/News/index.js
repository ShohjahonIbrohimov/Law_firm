import React from "react";
import styles from "../../styles/News.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Index = () => {
  const params = useParams();
  const news = useSelector((state) => state.newsReducer.news);

  return (
    <>
      <h2 className={styles.title}>
        {news.filter((n) => n._id === params.id)[0].title}
      </h2>
      <div className={styles.news_detail_wrapper}>
        <div
          className={styles.news_img_big}
          style={{ backgroundImage: "url(/photo.jpg)" }}
        ></div>
        <p className={styles.news_text}>
          {news.filter((n) => n._id === params.id)[0].content}
        </p>
      </div>
    </>
  );
};

export default Index;
