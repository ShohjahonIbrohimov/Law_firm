import React from "react";
import styles from "../styles/Siteheader.module.css";
import logo from "../assets/images/law_firm_logo.png";
const SiteHeader = () => {
  return (
    <div className={styles.sitehead}>
      <div className='sitehead_logo'>
        <img className={styles.logo} src={logo} alt='Logo' />
      </div>
      <div className={styles.search_container}>
        <form className={styles.search_wrapper}>
          <input
            type='text'
            placeholder='Search..'
            name='search'
            className={styles.search_input}
          />
          <button type='submit' className={styles.icon_btn}>
            <i class='bx bx-search'></i>
          </button>
        </form>
      </div>
      <div className={styles.sitehead_contact}>
        <h3 className={styles.phone}>+998 99 485 77 88</h3>
        <p className={styles.text_under_phone}>Kechayu kunduz xizmatingizda</p>
      </div>
    </div>
  );
};

export default SiteHeader;
