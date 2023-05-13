import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import "./navbar.css"

// BEM -> Block Element Modifier
function Menu(props) {
  return (<div className={props.className}>
  <p><a href="#home">Home</a></p>
  <p><a href="#home">What is GPT3?</a></p>
  <p><a href="#home">Open AI</a></p>
  <p><a href="#home">Case Studies</a></p>
  <p><a href="#home">Library</a></p>
  </div>)
};

function Sign(props) {
  return (<div className={props.className}>
  <p>Sign in</p>
  <button type="button">Sign up</button>
  </div>)
}
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <Menu className='gpt3__navbar-links_container'/>
      </div>
      <Sign className='gpt3__navbar-sign' />
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <Menu className="gp3__navbar-menu_container-links" /> 
            <Sign className='gpt3__navbar-menu_container-links-sign' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
