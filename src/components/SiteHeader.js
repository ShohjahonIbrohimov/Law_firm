import React, { useState } from "react";
import styles from "../styles/Siteheader.module.css";
import logo from "../assets/images/law_firm_logo.png";
import Signup from "./Signup";
import Login from "./Login";
import Modal from "./Global/GModal";
import { Button, Radio } from "antd";
import { LoginOutlined } from "@ant-design/icons";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/auth.actions";

const SiteHeader = () => {
  const [openSignup, setopenSignup] = useState(false);
  const [hasAccount, sethasAccount] = useState(true);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    user ? dispatch(logout()) : setopenSignup(true);
  };

  return (
    <div className={styles.sitehead}>
      <Modal
        width={350}
        open={openSignup}
        setopen={setopenSignup}
        title={hasAccount ? "Kirish" : "Ro'yxatdan o'tish"}
      >
        {!hasAccount && (
          <Signup sethasAccount={sethasAccount} setopen={setopenSignup} />
        )}
        {hasAccount && (
          <Login
            sethasAccount={sethasAccount}
            user={user}
            setopen={setopenSignup}
          />
        )}
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
        <Button
          type='primary'
          icon={<LoginOutlined />}
          size='large'
          onClick={handleAuth}
        >
          {user ? "Chiqish" : "Kirish"}
        </Button>
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
