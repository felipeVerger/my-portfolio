import React, {useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo2} alt="logo" />
        </div>
        {/* If the width of the window is greater than 900px this code below will be displayed */}
        <ul className='app__navbar-links'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => {
                return (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                )
            })}
        </ul>

        {/* If the width of the window is smaller than 900px this code below will be displayed */}
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>
            {
                // If toggle is true then the block below will be displayed
                toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0]}}
                        transition={{ duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul className="app__navbar-links">
                            {['home', 'about', 'contact', 'work', 'skills'].map((item) => {
                                return (
                                    <li key={item}>
                                        <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar