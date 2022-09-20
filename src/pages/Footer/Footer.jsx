import React, {useState} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import emailjs from '@emailjs/browser';
import './Footer.scss'

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_cmevrdf', 'template_1783c8g', e.target, '0vmvmzIQDJsW7QhxD')
      .then((result) => {
         console.log(result);
         setLoading(false);
         setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <h2 className="head-text">Take a coffe <span>&</span> chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:felipeverger123@gmail.com" className='p-text'>felipeverger123@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +54 11 49272489" className='p-text'>+54 11 49272489</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <form onSubmit={handleSubmit} className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            type="text" 
            className='p-text' 
            placeholder='Your name' 
            name="name"
          />
        </div>
        <div className='app__flex'>
          <input 
            type="email" 
            className='p-text' 
            placeholder='Your email' 
            name="email"
          />
        </div>
        <div className='app__flex'>
          <input 
            type="text" 
            className='p-text' 
            placeholder='Subject' 
            name="subject"
          />
        </div>
        <div>
          <textarea 
            className='p-text'
            placeholder='Your Message'
            name="message"
          />
        </div>
        <button 
          type='submit' 
          className='p-text' 
        >{loading ? 'Sending...' : 'Send Message'}</button>
      </form> : 
      <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)