import React from "react";
import styles from "../../styles/Home.module.css";
import staff from "../../assets/staff.json";
import { Carousel } from "antd";

const OurStaff = () => {
  return (
    <div>
      <Carousel autoplay={true}>
        {staff.map((s) => {
          return (
            <div>
              <div className={styles.staff_wrapper}>
                <div
                  className={styles.staff_img}
                  style={{ backgroundImage: `url(${s.pic})` }}
                ></div>
                <div className={styles.staff_about}>
                  <h3>{`${s.fullName}`}</h3>
                  <p>{s.about}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default OurStaff;
