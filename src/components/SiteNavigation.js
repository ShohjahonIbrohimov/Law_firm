import React from "react";
import styles from "../styles/SiteNavigation.module.css";
import { Link } from "react-router-dom";
import navItems from "./navItems.json";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

const SiteNavigation = () => {
  const history = useHistory();

  return (
    <div className={styles.navigation_wrapper}>
      <ul className={styles.navigation}>
        {navItems.map((item) => {
          return (
            <Link to={item.url}>
              <li>{item.text}</li>
            </Link>
          );
        })}
      </ul>
      <div>
        <Button onClick={() => history.goBack()} icon={<ArrowLeftOutlined />}>
          Orqaga
        </Button>
      </div>
    </div>
  );
};

export default SiteNavigation;
