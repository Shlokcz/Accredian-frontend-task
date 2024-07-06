import React from 'react'
import Styles from "./topheader.module.css";

const Topheader = () => {
  return (
    <div className={Styles.topheader}>
        <p>Navigate your ideal career path with tailored expert advice</p>
        <button>Contact Expert</button>
    </div>
  )
}

export default Topheader;