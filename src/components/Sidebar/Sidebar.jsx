import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { list } = useSelector(({ categories }) => categories);

    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({ id, name }) => (
                        <li key={id}>
                            <NavLink 
                            className={({ isAktive }) => `${styles.link} ${ isAktive ? styles.active : ""}`}
                            to={`/categories/${id}`}>{name}</NavLink>
                        </li>
                    ))}

                </ul>
            </nav>

            <div className={styles.footer}>
                <a href="/help" target="_blank" className={styles.link}> Help</a>
                <a href="/yerms" target="_blank" className={styles.link} style={{ textDecoration: "underline" }}> Terms & Conditions</a>
            </div>
        </section>
    )
}

export default Sidebar;