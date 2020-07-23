import React from 'react';
import ReactDOM from 'react-dom';
import Header2 from './components/Header2.jsx'
import Slide from './components/Slide.jsx'
import Servicios from './components/Servicios.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Header2 />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);
