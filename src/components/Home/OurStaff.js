import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Home.module.css";
import staff from "../../assets/staff.json";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
};

const OurStaff = () => {
  return (
    <div>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default OurStaff;
