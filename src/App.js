import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import Subheading from './components/subheading';
import Intro from './components/intro';
// import Scroll from './components/scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <Header />
        <Headline />
        <Subheading />
        <div className="scroll">SCROLL TO SEE MORE</div>
      </div>
      <div className="info-page">
      <Intro />
      </div>
    </div>
  );
}

export default App;
