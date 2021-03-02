import React from "react";
import styles from "../styles/News.module.css";
import { Link } from "react-router-dom";

const NewsSection = () => {
  return (
    <div className={styles.news_card}>
      <div
        className={styles.news_image}
        style={{ backgroundImage: "url(/photo.jpg)" }}
      ></div>
      <p>
        <Link className={styles.link_to_news} to='/news/1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          culpa animi. doloribus?
        </Link>
      </p>
    </div>
  );
};

export default NewsSection;
