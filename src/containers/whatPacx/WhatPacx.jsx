import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatPacx.css'

const WhatPacx = () => {
  return (
    <div className='pacx__whatpacx section__margin' id='wpacx'>
        <div className="pacx__whatpacx-feature">
            <Feature title="What is Pacx" text=" At Pacx Labs we are dedicated to providing DeveloperExperience-as-a-Service. We work with protocols to provide tailored interactive learning playgrounds." />
        </div>
        <div className="pacx__whatpacx-heading">
            <h1 className="gradient__text">We help protocols onboard new users to their ecosystems.</h1>
        </div>
        <div className="pacx__whatpacx-container">
            <Feature title="Interactive Learning" text="We help you design suitable interactive playgrounds to complement your educational materials." />
            <Feature title="Untapped Markets" text="We help you tap into wider audiences, including kids, through gamified learning which reduces the learning curve." />
            <Feature title="Developer Experience" text="We design the most optimal developer experience for you, to retain developers and users in your ecosystem. " />
        </div>
    </div>
  )
}

export default WhatPacx