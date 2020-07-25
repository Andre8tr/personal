import React from 'react';
import ReactDOM from 'react-dom';
import Header2 from './components/Header2.jsx'
import About from './components/About.jsx'
import Tech from './components/Tech.jsx'
import Portafolio from './components/Portafolio.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Header2 />
    <About />
    <Tech />
    <Portafolio />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
