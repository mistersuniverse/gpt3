import React from 'react';
import "./header.css";
import headerImg from "../../assets/ai.png";
import PeopleImg from "../../assets/people.png";

export const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content '>
        <div className='gradient__text' >
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
        Party we years to order allow asked of.
        </p>
        <div className='gpt3__header-content__contact' >
          <input type="email" placeholder='Your Email Address'></input>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={PeopleImg} alt='peoples-img'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={headerImg} className='gpt3__header-image' alt='header-img'/>
      </div>
    </div>
  )
}

export default Header
