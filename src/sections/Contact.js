// external
import { forwardRef } from 'react'

// internal

const ContactLink = ({ href, children, label, target }) => (
  <a className='d-flex align-items-center flex-column contact-wrapper mx-4' href={href} target={target}>
    <div className='contact-link d-flex justify-content-center align-items-center my-3'>
      {children}
    </div>
    <h4 className='contact-label d-none d-lg-block'>{label}</h4>
  </a>
)

const Contact = forwardRef((props, ref) => {
  return (
    <div id='contact' className='section d-flex' ref={ref}>
      <div className='container my-auto'>
        <div className='d-flex flex-column align-items-center'>
          <div className='d-flex flex-column align-items-center mb-4'>
            <h2 id='contact-title' className='text-center text-md-left'>CONTACT ME</h2>
            <h3 id='contact-subtitle' className='text-center text-md-left'>Let's get in touch.</h3>
          </div>
          <div className='d-flex justify-content-evenly align-items-start my-3'>
            <ContactLink label='See Github' href='https://github.com/carlos-lao' target='_blank'>
              <i className="bi bi-github contact-icon"></i>
            </ContactLink>
            <ContactLink label='Send an Email' href='mailto:cdrivlao@gmail.com'>
              <i className='bi bi-envelope-fill contact-icon'></i>
            </ContactLink>
            <ContactLink label='Visit LinkedIn' href='https://www.linkedin.com/in/carlos-lao/' target='_blank'>
              <i className='bi bi-linkedin contact-icon'></i>
            </ContactLink>
          </div>
          <h6 className='mt-5 mb-5'><a href='tel:+16237593438' className='contact-address'>+1 (623) 759-3438</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='mailto:cdrivlao@gmail.com' className='contact-address'>cdrivlao@gmail.com</a></h6>
        </div>
      </div>
    </div>
  )
})

export default Contact;