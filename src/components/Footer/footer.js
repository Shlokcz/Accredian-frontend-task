import React from "react";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={Styles.footer}>
      <div className={Styles.footerheading}>
        <div className={Styles.logoImg}>
          <img src="/images/accredianlogo.png" alt="logo" />
        </div>
        <div className={Styles.callNow}>
          <button>Schedule 1-on-1 Call Now</button>
          <p>Speak with our Learning Advisor</p>
        </div>
      </div>
      <div className={Styles.actualContent}>
        <div className={Styles.programs}> 
            <h3>Programs</h3>
            <p>Data Science & AI</p>
            <p>Product Management</p>
            <p>Business Analytics</p>
            <p>Digital Transformation</p>
            <p>Business Management</p>
            <p>Project Management</p>
            <p>Strategy & Leadership</p>
            <p>Senior Management</p>
            <p>Fintech</p>
        </div>
        <div className={Styles.contact}>
            <h3>Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries):pm@accredian.com</p>
            <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline:+91 9625811095</p>
            <p>Enrolled Student Helpline: +91 7969322507</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,</p>
            <p>Haryana 122015</p>
            <h3>Why Accredian</h3>
            <h3>Follow Us</h3>
            <div className={Styles.footerImgs}>
                <img src="/images/facebook.png" alt="facebook" />
                <img src="/images/linkedin.png" alt="linkedin" />
                <img src="/images/twitter.png" alt="twitter" />
                <img src="/images/instagram.png" alt="instagram" />
                <img src="/images/youtube.png" alt="youtube" />
            </div>

        </div>
        <div className={Styles.accredian}>
            <h3>Accredian</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Admission Policy</p>
            <p>Referral Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>MAster FAQs</p>
        </div>
      </div>
      <div className={Styles.copyrightLine}>
        <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
