import React from 'react'
import './header.css'
import puzzle4 from '../../assets/puzzle4.png'
const Header = () => {
  return (
    <div className="pacx__header section__padding" id="home">
    <div className="pacx__header-content">
      <h1 className="gradient__text"> An Interactive Web3 Learning Platform</h1>
      <p>At Pacx Labs we curate tailored interactive learning platforms to enable protocols gain new users and developers at their platform. Through visual drag and drop playgrounds, users connect puzzle blocks to build smart contracts.</p>

      <div className="pacx__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

    </div>

    <div className="pacx__header-image">
      <img src={puzzle4} />
    </div>
  </div>
  )
}

export default Header