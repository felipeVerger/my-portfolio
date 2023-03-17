import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/felipeVerger" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/felipevverger/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
        <div>
          <a href="https://twitter.com/felipe_verger" target="_blank" rel="noreferrer"><BsTwitter/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/pepeverger/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia