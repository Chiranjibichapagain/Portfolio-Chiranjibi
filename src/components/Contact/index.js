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

  // const encode = (data) => {
  //       return Object.keys(data)
  //           .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //           .join("&");
  //     }

  // const handleSubmit = (e) => {
  //   console.log('submitting!!!')
  //   fetch("/", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //           body: encode({ "form-name": "contact", ...fields })
  //         })
  //           .then(() => alert("Success!"))
  //           .catch(error => alert(error));

  //         e.preventDefault();
  // }

  return (
    <div className={styles.contactMain}>
      <div className={styles.formBody}>
      <h2 className={styles.heading}>Contact Form</h2>
        <h5 className={classes.intro}>Please Fill in the form to send me message or feedback.</h5>
        <form name='contact' method='post'  className={styles.form}>
          <input type="hidden" name="form-name" value="contact" />  
          <Input value={fields.firstName}  name='firstName' type="text" placeholder="E.g. Your Name" labelText={"First Name"} />
          <Input value={fields.lastName}   name='lastName' type="text" placeholder="E.g. Your Surname" labelText={"Last Name"} />
          <Input value={fields.email}   name='email' type="email" placeholder="E.g. example@example.com" labelText={"Email"} />
          <div className={styles.inputDiv}>
          <label className={styles.label} >Your Message</label>
          <textarea value={fields.message}  name='message' placeholder="E.g. Your message to me" className={styles.input} cols="30" rows="7" />
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
