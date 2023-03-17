import React, {useState, useRef} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import emailjs from '@emailjs/browser';
import './Footer.scss'

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_VITE_TEMPLATE_ID, {
        from_name: form.name,
        to_name: "Felipe",
        from_email: form.email,
        to_email: "felipeverger123@gmail.com",
        subject: form.subject,
        message: form.message
      }, process.env.REACT_APP_VITE_PUBLIC_ID)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
          setForm({name: '', email: '', subject: '', message: ''});
        }).catch((error) => {
          setLoading(false);
          alert("Something went wrong, I am sorry try again later")
        })
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
      <form onSubmit={handleSubmit} ref={formRef} className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input 
            type="text" 
            name='name' 
            value={form.name} 
            onChange={handleChange}
            placeholder="What's your name?"
            className='p-text' 
          />
        </div>
        <div className='app__flex'>
          <input 
            type="email" 
            name='email' 
            value={form.email} 
            onChange={handleChange}
            placeholder="What's your email?"
            className='p-text' 
          />
        </div>
        <div className='app__flex'>
          <input 
            type="text" 
            className='p-text'
            value={form.subject}
            onChange={handleChange} 
            placeholder='Subject' 
            name="subject"
          />
        </div>
        <div>
          <textarea 
            name='message' 
            value={form.message} 
            onChange={handleChange}
            className='p-text'
            placeholder='Your Message'
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