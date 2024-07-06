import React from "react";
import Styles from "./questions.module.css";

const Questions = () => {
  return (
    <div className={Styles.frequentquestions}>
      <p>
        Frequently Asked <span>Questions</span>
      </p>
      <div className={Styles.questions}>
        <div className={Styles.questionBtns}>
          <button className={Styles.button1}>Eligibility</button>
          <button className={Styles.button2}>How to Use?</button>
          <button className={Styles.button3}>Terms & Conditions</button>
        </div>
        <div className={Styles.paras}>
          <p className={Styles.para1}>
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </p>
          <p className={Styles.para2}>
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>
          <p className={Styles.para3}>What is the minimum system configuration required?</p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
