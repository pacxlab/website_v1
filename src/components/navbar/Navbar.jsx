import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo2 from '../../assets/logo2.png';
import './navbar.css';


// read up more on BEM -> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='pacx__navbar'>
      <div className='pacx__navbar-links'>
        <div className="pacx__navbar-links_logo">
          <img src={logo2} alt="logo" />
        </div>
        <div className="pacx__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wpacx">What is Pacx?</a></p>
          <p><a href="#possibility">Interactive Learning</a></p>
          <p><a href="#features">Get Started</a></p>
        </div>
      </div>
      <div className="pacx__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="pacx__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="pacx__navbar-menu_container scale-up-center">
          <div className="pacx__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wpacx">What is Pacx?</a></p>
            <p><a href="#possibility">Interactive Learning</a></p>
            <p><a href="#features">Get Started</a></p>
          </div>
          <div className="pacx__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar