import React from 'react'
import styles from "../styles/SiteNavigation.module.css"

const SiteNavigation = () => {
    return (
        <ul className={styles.navigation}>
            <li>
                <a href="">Biz haqimizda</a>
            </li>
            <li>
                <a href="">Onlayn to'lov</a>
            </li>
            <li>
                <a href="">Aloqa</a>
            </li>
        </ul>
    )
}

export default SiteNavigation
