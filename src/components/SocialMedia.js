import React from "react";
import styles from "../styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.social_media_wrap}>
      <div className={styles.social_media}>
        <i className={`bx bxl-facebook-circle bx-sm ${styles.facebook}`}></i>
        <a
          href='https://www.facebook.com/Dilshodbeklaw/'
          target='_blank'
          rel='noreferrer'
        >
          Facebook
        </a>
      </div>
      <div className={styles.social_media}>
        <i className={`bx bxl-telegram bx-sm ${styles.telegram}`}></i>
        <a href='http://t.me/Dilshodbek_law' target='_blank' rel='noreferrer'>
          Telegram
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
