import React, { useState, useEffect } from "react";
import styles from "../../styles/News.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseUrl } from "../../baseUrl";

const Index = () => {
  const params = useParams();
  const news = useSelector((state) => state.newsReducer.news);
  const [currentNews, setcurrentNews] = useState(null);

  useEffect(() => {
    setcurrentNews(news.filter((n) => n._id === params.id)[0]);
  }, [news]);

  return (
    <>
      <h2 className={styles.title}>{currentNews?.title}</h2>
      <div className={styles.news_detail_wrapper}>
        <div
          className={styles.news_img_big}
          style={{ backgroundImage: `url(${baseUrl}${currentNews?.img}` }}
        ></div>
        <p className={styles.news_text}>{currentNews?.content}</p>
      </div>
    </>
  );
};

export default Index;
