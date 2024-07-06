import React from 'react'
import Styles from "./bottomheader.module.css";
const Bottomheader = () => {
  return (
    <div className={Styles.bottomheader}>
        <ul>
            <li>Refer</li>
            <li>Benefits</li>
            <li>FAQs</li>
            <li>Support</li>
        </ul>
    </div>
  )
}

export default Bottomheader;