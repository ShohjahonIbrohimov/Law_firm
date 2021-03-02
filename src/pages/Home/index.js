import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import NewsSection from "../../components/NewsSection";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staff from "../../assets/staff.json";
// SERVICES
import service1 from "../../assets/SERVICES/Service1.json";
import service2 from "../../assets/SERVICES/Service2.json";
import service3 from "../../assets/SERVICES/Service3.json";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
  };

  const services = [
    {
      service: service1,
      id: "1",
    },
    {
      service: service2,
      id: "2",
    },
    {
      service: service3,
      id: "3",
    },
  ];

  return (
    <div className={styles.home_contents_wrapper}>
      <div className={styles.content1}>
        <section className={styles.ourstaff_section}>
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
        </section>
        <section className={styles.services_section}>
          <div className='section_title_wrapper'>
            <h3 className='section_title'>Bizning xizmatlar</h3>
            <button className='glb_btn'>
              <i class='bx bx-plus-circle bx-sm'></i>
            </button>
          </div>
          <div className={styles.services}>
            {services.map((s) => (
              <ServiceCard data={s} />
            ))}
          </div>
        </section>
      </div>
      <div className={styles.news}>
        <div className='section_title_wrapper'>
          <img className='section_title_triangle' src='/triangle.svg' alt='' />
          <h3 className='section_title'>Huquqiy yangiliklar</h3>
        </div>

        <NewsSection />
        <NewsSection />
        <NewsSection />
        {/* <NewsSection /> */}
      </div>
      <button className='glb_btn send_question_btn'>
        Savol yuborish
        <i class='bx bxs-chevron-right'></i>
      </button>
    </div>
  );
};

export default Home;
