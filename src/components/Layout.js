import React from "react";
import styles from "../styles/Layout.module.css";
import SiteHeader from "./SiteHeader";
import SiteNavigation from "./SiteNavigation";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <SiteHeader />
            <SiteNavigation />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
