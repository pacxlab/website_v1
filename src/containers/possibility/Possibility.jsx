import React from 'react'
import './possibility.css'
import puzzle2 from '../../assets/puzzle2.png'

const Possibility = () => {
  return (
    <div className='pacx__possibility section__padding' id='possibility'>
      <div className="pacx__possibility-image">
        <img src={puzzle2} alt="face built by connecting puzzle blocks" />
      </div>
      <div className="pacx__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>With Pacx users have the freedom to explore blockchain development in an interactive manner. They also have the freedom to design and build their own learning playgrounds based on their imagination!</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility