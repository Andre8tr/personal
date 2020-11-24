import React from 'react';
import ReactDOM from 'react-dom';
import Personal from './components/Personal.jsx'
import Blog from './components/blog/Blog.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Blog />
    {/*<Personal />*/}
  </React.StrictMode>,
  document.getElementById('root')
);
