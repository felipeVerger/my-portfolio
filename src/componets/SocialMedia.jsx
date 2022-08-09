import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/felipeVerger" target="_blank"><BsGithub/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/felipevverger/" target="_blank"><BsLinkedin/></a>
        </div>
        <div>
          <a href="https://twitter.com/felipe_verger" target="_blank"><BsTwitter/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/pepeverger/" target="_blank"><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia