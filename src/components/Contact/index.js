import React from "react";

import Input from '../Input/'
import Button from '../Button'
import styles from "./Contact.module.css";
import classes from "./Contact.module.css";


const Contact = () => {

  const handleClick = () => {
    
  }

  return (
    <div className={styles.contactMain}>
      <div className={styles.formBody}>
      <h2 className={styles.heading}>Contact Form</h2>
        <h5 className={classes.intro}>Please Fill in the form to send me message or feedback.</h5>
        <form className={styles.form}>
          <Input type="text" placeholder="E.g. Your Name" labelText={"First Name"} />
          <Input type="text" placeholder="E.g. Your Surname" labelText={"Last Name"} />
          <Input type="text" placeholder="E.g. example@example.com" labelText={"Email"} />
          <div className={styles.inputDiv}>
          <label className={styles.label} >Your Message</label>
          <textarea placeholder="E.g. Your message to me" className={styles.input} cols="30" rows="7" />
          </div>
          <div className={styles.btnDiv} >
          <Button text="Send" type="primary" onClick={()=>handleClick} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
