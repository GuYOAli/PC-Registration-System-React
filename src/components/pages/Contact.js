import React, { Component } from 'react'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import Like from '../Likes';


import './Contact.css';


const send=(e)=>{
  e.preventDefault()  // Prevents default refresh by the browser
  emailjs.sendForm('gmail', 'template_b4b251a',e.target,'user_vqcPylYasoGahcUkhrSQP')
  .then(result => {

    toast('Message Sent, I\'ll get back to you shortly', result.text);
  
  },
  error => {
  toast.error( 'An error occured, Plese Check Your Connection',error.text)
  })
  e.target.reset();
  }

class Contact extends Component {
  
    render() { 
      //toast("SEND ME A FEEDBACK");
        return ( 
      <section className="contact-form">
        <div className="formcontainer">
          <form className="form" onSubmit = {send}>
          <h2>Contact Form</h2>
        <input
          type="text"
          id="sub"
          name="subject"
          placeholder="Your Subject.."
          required
        />

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name.."
          required
        />

        <input type="email" id="email" name="email" placeholder="Your email" required/>

        <textarea
          required
          id="msg"
          name="message"
          placeholder="Write Your Feedback..."
        ></textarea>
        <input type="submit" value="Send"/>
        <Like />
      </form>
    </div>
    </section>
         );
    }
    
      
}
 
export default Contact;