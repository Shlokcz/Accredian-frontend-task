import React from "react";
import Styles from "./touch.module.css";

const Touch = () => {
  return (
    <div className={Styles.touch}>
      <div className={Styles.imgandpara}>
        <img src="/images/getintouchimg.png" alt="getintouch" />
        <div className={Styles.paras}>
          <p className={Styles.para1}>Want to delve deeper into the program?</p>
          <p className={Styles.para2}>
            Share your details to receive expert insights from our program team!
          </p>
        </div>
      </div>
      <button>Get In Touch</button>
    </div>
  );
};

export default Touch;
