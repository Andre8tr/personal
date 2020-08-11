//import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import Inconsciente from '../assets/img/portafolio/inc.jpg'
import Pc from '../assets/img/portafolio/pc.png'
const Portafolio = () => {

  const Photo = styled.img`
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
      &:hover{
        opacity: 0.5;
      }
  `
  return(
    <article id="port">
      <div className = "fluid mt-5" css = {css`
        background-color: #d4d4dc;
      `}>
        <h1 className = "text-center"> Portafolio </h1>
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-6 col-md-4 col-lg-4 my-5">
              <Photo src = {Inconsciente} alt ="" className = "img-fluid"/>
            </div>
            <div className = "col-sm-6 col-md-4 col-lg-4 my-5">
              <Photo src = {Pc} alt ="" className = "img-fluid"/>
              <small>Web app, para poder llevar el control de inventario de tus computadoras <a target = "_blank" href="https://github.com/Andre8tr/inventariopc">Código en Github</a> </small>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Portafolio
