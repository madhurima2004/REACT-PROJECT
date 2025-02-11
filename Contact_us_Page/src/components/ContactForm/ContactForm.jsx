import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import React from 'react'
import {RiMessageFill } from  'react-icons/ri'
import {FaPhone} from "react-icons/fa6";
import {HiOutlineMail} from "react-icons/hi";
import { useState } from 'react';

function ContactForm() {

const [name, setName] = useState("Madhurima Saha")
const [email,setEmail] = useState("madhurimasaha375@gmail.com")
const [text, setText]= useState("hello world")
  // let name="Madhurima Saha";
  // let email="madhurimasaha375@gmail.com";
  // let text="hello world";

  const onViaCallSubmit =()=>{
    console.log("i am from call");
  }

const onSubmit =(event)=>{
  event.preventDefault();
  // name = ;

   setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
 console.log(name, email,text);
}


  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon={<RiMessageFill fontSize="24px"/> }/>
    
    <Button 
    onClick={onViaCallSubmit}
    text="VIA CALL" icon={<FaPhone fontSize="24px"/> }/>
    </div>
    <Button 
    isOutline={true}
    text="VIA EMAIL FORM" icon={<HiOutlineMail fontSize="24px"/> }/>
    
    <form
    onSubmit={onSubmit}
    >
        <div className={styles.form_container}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
        </div>

        <div className={styles.form_container}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'/>
        </div>

        <div className={styles.form_container}>
            <label htmlFor='text'>Text</label>
            <textarea name='text'/>
        </div>
        <div style={{display: "flex", justifyContent:"end"}}>
        <Button text="SUBMIT" />
        </div>
        <div>
          {name + " " + email + " " + text}
        </div>
    </form>
    </div>
     <div className={styles.contact_Image}>
      <img src="/images/contact.svg" alt='contact image'/>
     </div>
    </section>
  )
}

export default ContactForm

