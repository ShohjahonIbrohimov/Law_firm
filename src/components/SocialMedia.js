import React from "react";
import styles from "../styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.social_media_wrap}>
      <div className={styles.social_media}>
        <i className={`bx bxl-facebook-circle bx-sm ${styles.facebook}`}></i>
        <span>Facebook</span>
      </div>
      <div className={styles.social_media}>
        <i className={`bx bxl-telegram bx-sm ${styles.telegram}`}></i>
        <span>Telegram</span>
      </div>
    </div>
  );
};

export default SocialMedia;
