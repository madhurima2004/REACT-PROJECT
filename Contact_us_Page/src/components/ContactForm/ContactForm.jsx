import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import React from 'react'
import {RiMessageFill } from  'react-icons/ri'
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function ContactForm() {
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon={<RiMessageFill fontSize="24px"/> }/>
    <Button text="VIA CALL" icon={<FaPhone fontSize="24px"/> }/>
    </div>
    <Button 
    isOutline={true}
    text="VIA EMAIL FORM" icon={<HiOutlineMail fontSize="24px"/> }/>
    
    <form>
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
    </form>
    </div>
     <div className={styles.contact_Image}></div>
    </section>
  )
}

export default ContactForm

