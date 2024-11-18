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
            <Feature title="Playground" text="Users learn smart contract development through visual drag and drop block interfaces which translate to code." />
            <Feature title="Deployment" text="We offer one-click deployment services to supported networks from within the playground. Deployment has never been easier!" />
            <Feature title="Contract Analysis" text="Users can upload existing smart contracts for analysis. Based on the network, users get snippets of official documentation to help in understanding the contract. " />
        </div>
    </div>
  )
}

export default WhatPacx