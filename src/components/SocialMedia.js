import React from "react";
import styles from "../styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.social_media_wrap}>
      <a
        href='https://www.facebook.com/Dilshodbeklaw/'
        target='_blank'
        rel='noreferrer'
      >
        <div className={styles.social_media}>
          <i className={`bx bxl-facebook-circle bx-sm ${styles.facebook}`}></i>
          <span>Facebook</span>
        </div>
      </a>
      <a href='http://t.me/Dilshodbek_law' target='_blank' rel='noreferrer'>
        <div className={styles.social_media}>
          <i className={`bx bxl-telegram bx-sm ${styles.telegram}`}></i>
          <span>Telegram</span>
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
