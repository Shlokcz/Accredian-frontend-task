import React, { useState } from 'react';
import axios from 'axios';
import Styles from "./form.module.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referral: '',
    course: '', 
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:5000/referrals', formData);
      console.log(response);
      setResponseMessage('Form submitted successfully!');
    } catch (error) {
      setResponseMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <section className={Styles.form}>
      <h1>Contact Us</h1>
      <form className={Styles.currForm} onSubmit={handleSubmit}>
        <div className={Styles.namefield}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.emailfield}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.referralfield}>
          <label htmlFor="referral">Referral:</label>
          <input
            type="email"
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          />
        </div>
        <div className={Styles.coursefield}>
          <label htmlFor="course">Course:</label>
          <textarea
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </section>
  );
};

export default FormPage;
