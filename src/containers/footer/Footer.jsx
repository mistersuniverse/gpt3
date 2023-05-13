import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.svg"
export const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-headline'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>

      <div className='gpt3__footer-main'>
        <div className='gpt3__footer-main__col'>
          <div className='.gpt3__footer-links_logo'>
            <img src={logo} alt='logo'/>
          </div> 
          <p>Crechterwoord K12 182 DK Alknjkcb,<br></br>All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-main__col'>
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-main__col'>
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-main__col'>
          <h3>Get in Touch</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>@2021 GPT-3. All rights reserved</div>
    </div>
  )
}

export default Footer
