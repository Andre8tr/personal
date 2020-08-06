//import React from 'react'
import fondo from '../assets/img/ff.jpg'
import fondo2 from '../assets/img/f2.jpg'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


const Slide = () => {
    return(
      <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1 css =  {css `
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
            `}> Haciendo tus ideas una realidad </h1>
            <img src={fondo} className="d-block w-100" heght="200px" alt="..." />
          </div>
          <div className="carousel-item">
            <img src= {fondo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        </div>
      </div>
    )
}

export default Slide
