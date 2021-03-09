import React, { useState } from "react";
import styles from "../styles/Siteheader.module.css";
import logo from "../assets/images/law_firm_logo.png";
import Signup from "./Signup";
import Login from "./Login";
import Modal from "./Modal";
// REDUX
import { useSelector } from "react-redux";

const SiteHeader = () => {
  const [openSignup, setopenSignup] = useState(false);
  const [hasAccount, sethasAccount] = useState(false);
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className={styles.sitehead}>
      <Modal width={30} open={openSignup} setopen={setopenSignup}>
        {!hasAccount && <Signup sethasAccount={sethasAccount} />}
        {hasAccount && <Login sethasAccount={sethasAccount} user={user} />}
      </Modal>

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
      <div>
        <button onClick={() => setopenSignup(true)} className='glb_btn'>
          login
        </button>
      </div>

      <div className={styles.sitehead_contact}>
        <div className={styles.social_media}>
          <a
            href='https://www.facebook.com/Dilshodbeklaw/'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-facebook-circle bx-sm'></i>
          </a>
          <a href='http://t.me/Dilshodbek_law' target='_blank' rel='noreferrer'>
            <i class='bx bxl-telegram bx-sm'></i>
          </a>
        </div>
        <div>
          <h3 className={styles.phone}>+998 99 485 77 88</h3>
          <p className={styles.text_under_phone}>
            Kechayu kunduz xizmatingizda
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
