import React from 'react'
import Styles from "./learncontent.module.css";
import { Link } from "react-router-dom";

const Learncontent = () => {
  return (
    <div className={Styles.learncontent}>
        <div className={Styles.content}>
            <h1>Let’s Learn<br/> & Earn</h1>
            <h3>Get a chance to win<br/> up-to <span>Rs. 15,000</span></h3>
            <button><Link className={Styles.link} to="/form">Refer Now</Link></button>
        </div>
        <div className={Styles.mainimg}>
            <img src="/images/img.png" alt="mainimg" />
        </div>
    </div>
  )
}

export default Learncontent;