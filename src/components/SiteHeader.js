import React, { useState } from "react";
import styles from "../styles/Siteheader.module.css";
import logo from "../assets/images/law_firm_logo.png";
import { Button, Space, Avatar } from "antd";
import {
  LoginOutlined,
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import navItems from "./navItems.json";
// COMPONENTS
import MobileNav from "./MobileNav";
import SearchDrawer from "./SearchDrawer";
import UserMenu from "./UserMenu";
import SocialMedia from "./SocialMedia";
import Signup from "./Signup";
import Login from "./Login";
import Modal from "./Global/GModal";
import { Link } from "react-router-dom";
// REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/auth.actions";

const SiteHeader = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const [openSignup, setopenSignup] = useState(false);
  const [hasAccount, sethasAccount] = useState(true);
  const [visible, setvisible] = useState(false);
  const [visibleSearch, setvisibleSearch] = useState(false);

  const handleAuth = () => {
    user ? dispatch(logout()) : setopenSignup(true);
  };

  return (
    <div className={styles.header_wrapper}>
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

        <Space>
          <div className='sitehead_logo'>
            <Link to='/'>
              {" "}
              <img className={styles.logo} src={logo} alt='Logo' />
            </Link>
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
        </Space>
        <Space>
          <Space>
            {user && <UserMenu />}
            {!user && (
              <Button
                onClick={handleAuth}
                type='dashed'
                icon={<LoginOutlined />}
              >
                Kirish
              </Button>
            )}
            <div className={styles.showon_mobile}>
              <Space>
                <Button
                  onClick={() => setvisibleSearch(true)}
                  type='dashed'
                  icon={<SearchOutlined />}
                />
                <Button
                  onClick={() => setvisible(true)}
                  type='primary'
                  icon={<MenuOutlined />}
                />
              </Space>
            </div>
          </Space>
          <div className={styles.sitehead_contact}>
            <SocialMedia />
            <h3>+998 94 208 0878</h3>
          </div>
        </Space>
        <MobileNav
          visible={visible}
          setvisible={setvisible}
          navItems={navItems}
        />
        <SearchDrawer visible={visibleSearch} setvisible={setvisibleSearch} />
      </div>
    </div>
  );
};

export default SiteHeader;
