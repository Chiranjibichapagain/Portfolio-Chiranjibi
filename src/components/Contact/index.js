import React from "react";

import Input from '../Input/'
import Button from '../Button'
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactMain}>
      <div className={styles.formBody}>
      <h2 className={styles.heading}>Contact Form</h2>
        <h5 className={styles.intro}>Please Fill in the form to send me a message.</h5>
        <form name='contact' method='post'  className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />  
          <Input name='Name' type="text" placeholder="E.g. Your full name" labelText={"First Name"} />
          <Input name='Email' type="email" placeholder="E.g. example@example.com" labelText={"Email"} />
          <div className={styles.inputDiv}>
          <label className={styles.label} >Your Message</label>
          <textarea name='Message' placeholder="E.g. Your message to me" className={styles.input} cols="30" rows="7" />
          </div>

          <div data-netlify-recaptcha='true'></div>
          <div className={styles.btnDiv} >
          <Button type='submit' text="Send" btnStyle="primary"  />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
