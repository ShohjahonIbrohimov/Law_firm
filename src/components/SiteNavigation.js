import React from "react";
import styles from "../styles/SiteNavigation.module.css";
import { Link } from "react-router-dom";

const SiteNavigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link to='/about'>Biz haqimizda</Link>
      </li>
      <li>
        <Link to=''>Onlayn to'lov</Link>
      </li>
      <li>
        <Link to=''>Aloqa</Link>
      </li>
      <li>
        <Link to='/questions'>Bizga berilgan savollar</Link>
      </li>
    </ul>
  );
};

export default SiteNavigation;
