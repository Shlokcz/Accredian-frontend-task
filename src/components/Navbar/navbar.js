import React from 'react'
import Styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className={Styles.navbar}>
        <div className={Styles.img}>
            <img src="/images/logo.png" alt="logo" />
            <div className={Styles.courseBtn}>
                <button>Courses</button>
                <img src="/images/arrow.png" alt="arrow" />
            </div>
        </div>
        <div className={Styles.navbarItems}>
            <ul>
                <li><Link className={Styles.link} to="/form">Refer & Earn</Link></li>
                <li>Resources</li>
                <li>About Us</li>
                <button className={Styles.loginBtn}>Login</button>
                <button className={Styles.tryforfreeBtn}>Try for free</button>
            </ul>
        </div>
    </section>
  )
}

export default Navbar;