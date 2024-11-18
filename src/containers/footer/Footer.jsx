import React from 'react'
import './footer.css'
import logo2 from '../../assets/logo2.png';

const Footer = () => {
  return (
    <div className="pacx__footer section__padding">
    <div className="pacx__footer-heading">
      <h1 className="gradient__text">Book a Call with us to step into the future of Blockchain Learning</h1>
    </div>

    <div className="pacx__footer-btn">
      <p>Request a Demo</p>
    </div>

    <div className="pacx__footer-links">
      <div className="pacx__footer-links_logo">
        <img src={logo2} alt="pacx_logo" />
        <p>Pacx Lab, <br /> All Rights Reserved</p>
      </div>
      <div className="pacx__footer-links_div">
        <h4>Social Media</h4>
        <p>
          <a href="https://twitter.com/PacksHQ" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
      <div className="pacx__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="pacx__footer-links_div">
        <h4>Get in touch</h4>
        <p>cyndie@pacxlab.com</p>
      </div>
    </div>

    <div className="pacx__footer-copyright">
      <p>@2024 Pacx. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer