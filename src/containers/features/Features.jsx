import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Playground',
    text: 'Users learn smart contract development through visual drag and drop block interfaces which translate to code.',
  },
  {
    title: 'Deployment',
    text: 'We offer one-click deployment services to supported networks from within the playground. Users can deploy their contracts to the network of their choice.',
  },
  {
    title: 'Curriculum',
    text: 'We curate comprehensive learning materials for users of all ages to learn blockchain development using our platform.',
  },
  {
    title: 'Developer Tooling',
    text: 'We provide SDKs and APIs for developers to integrate our platform with their existing tools and services.',
  },
];

const Features = () => {
  return (
    <div className='pacx__features section__padding' id='features'>
      <div className='pacx__features-heading'>
        <h1 className='gradient__text'> Features We Offer</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features