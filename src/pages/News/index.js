import React from "react";
import styles from "../../styles/News.module.css";

const Index = () => {
  return (
    <>
      <h2 className={styles.title}>Lorem ipsum dolor sit amet.</h2>
      <div className={styles.news_detail_wrapper}>
        <div
          className={styles.news_img_big}
          style={{ backgroundImage: "url(/photo.jpg)" }}
        ></div>
        <p className={styles.news_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          unde eius dicta tempore ex deleniti assumenda ab voluptatum odio, non
          expedita laborum quos autem veritatis quasi quam! Non officiis facere
          modi quisquam, esse eveniet vero. Numquam possimus enim aliquam
          distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptate eos officiis, quam incidunt laborum reprehenderit quia nisi
          culpa autem numquam eveniet, perferendis exercitationem labore
          corporis, expedita at! Sed deserunt ullam similique est quidem nam eos
          vero atque, accusamus deleniti aperiam praesentium illum neque iste
          error fugiat repellendus temporibus veniam optio.
        </p>
      </div>
    </>
  );
};

export default Index;
