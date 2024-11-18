
import './App.css';
import {CTA, Navbar} from './components';
import {Header, Footer, Features, Possibility, WhatPacx} from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />

      </div>
      <WhatPacx />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
