import React, {useState} from "react";

import Input from '../Input/'
import Button from '../Button'
import styles from "./Contact.module.css";
import classes from "./Contact.module.css";


const Contact = () => {
  const [fields, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message:''
  })

  const handleChange = (e) => {
    setValues({...fields, [e.target.name]:[e.target.value]})
  }

  const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

  const handleSubmit = (e) => {
    fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...fields })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          e.preventDefault();
  }

  return (
    <div className={styles.contactMain}>
      <div className={styles.formBody}>
      <h2 className={styles.heading}>Contact Form</h2>
        <h5 className={classes.intro}>Please Fill in the form to send me message or feedback.</h5>
        <form onSubmit={handleSubmit} name='contact' method='POST' action='/contact-thanks' data-netlify-honeypot="bot-field" id='contact-form' data-netlify='true' className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />  
          <Input value={fields.firstName} handleChange={handleChange} name='firstName' type="text" placeholder="E.g. Your Name" labelText={"First Name"} />
          <Input value={fields.lastName} handleChange={handleChange}  name='lastName' type="text" placeholder="E.g. Your Surname" labelText={"Last Name"} />
          <Input value={fields.email} handleChange={handleChange}  name='email' type="email" placeholder="E.g. example@example.com" labelText={"Email"} />
          <div className={styles.inputDiv}>
          <label className={styles.label} >Your Message</label>
          <textarea value={fields.message} onChange={handleChange}  name='message' placeholder="E.g. Your message to me" className={styles.input} cols="30" rows="7" />
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
