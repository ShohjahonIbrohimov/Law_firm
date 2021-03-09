import React, { useState } from "react";
import NewsSection from "./NewsSection";
import styles from "../../styles/Home.module.css";

const News = () => {
  const [news, setnews] = useState([]);
  return (
    <div className={styles.news}>
      <div className='section_title_wrapper'>
        <h3 className='section_title'>Huquqiy yangiliklar</h3>
        <button className='glb_btn'>
          <i class='bx bx-plus-circle bx-sm'></i>
        </button>
      </div>

      {news.map((n) => (
        <NewsSection news={n} />
      ))}
    </div>
  );
};

export default News;
