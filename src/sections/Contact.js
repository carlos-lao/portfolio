// external
import React from 'react'

// internal
import { mainBackground } from '../assets';

const ContactLink = ({ onClick, children, label }) => (
  <div className='d-flex align-items-center flex-column flex-xxl-row contact-wrapper'>
    <div className='contact-link d-flex justify-content-center align-items-center my-3' onClick={onClick}>
      {children}
    </div>
    <h4 className='contact-label d-none d-lg-block'>{label}</h4>
  </div>
)

const Contact = () => {
  return (
    <div id='contact' className='section d-flex'>
      {/* <img src={mainBackground} id="bg-img" className="bg-main" alt="black and white image of waves" />
      <div id="contact-overlay" className="bg-main"></div> */}
      <div className='container my-auto'>
        <div className='row d-flex align-items-center'>
          <div className='col-12 col-xxl-8 d-flex flex-column align-items-center align-items-xxl-start mb-5'>
            <h2 id='contact-title' className='text-center text-md-left'>CONTACT ME</h2>
            <h3 id='contact-subtitle' className='text-center text-md-left'>Let's get in touch.</h3>
          </div>
          <div className='col-12 col-xxl-4 d-flex justify-content-evenly flex-xxl-column align-items-start ml-xxl-5'>
            <ContactLink label='See Github Page' onClick={()=>{}}>
              <i className="bi bi-github contact-icon align-self-xl-end"></i>
            </ContactLink>
            <ContactLink label='Send an Email' onClick={()=>{}}>
              <i className='bi bi-envelope-fill contact-icon align-self-xl-start'></i>
            </ContactLink>
            <ContactLink label='Visit LinkedIn Profile' onClick={()=>{}}>
              <i className='bi bi-linkedin contact-icon align-self-xl-end'></i>
            </ContactLink>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;