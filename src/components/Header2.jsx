//import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
//Imagenes
import Barra from '../assets/img/bar.jpg'
import { Link } from 'react-scroll'

const Header2 = () => {
  //Constante de estilo para etiqueta "p"
  //Se queda con p porque al usar <Link> y un <a> dentro se traduce a => <a> <a> </a> </a>
    const LinkItem = styled.p `
      text-decoration: none;
      color: black;
      transition: 0.3s;
      display: inline;
      &:hover{
        text-decoration: none;
        color: black;
        transition: 0.3s;
        font-size: 110%;
      }`

    const Large = styled.img`
      height: 20px;
      width: 100%;
      display: block;
    `

  return(
    <header id="header">
      <Large src ={Barra} alt="Hola" className="fluid"/>
      <div className="container">
        <div className = "row">
          <div className = "col-sm-12 col-md-4 col-lg-4 mt-5 text-center">
            <hr />
             <Link to="about" smooth = {true} duration = {200}> <LinkItem className = "mx-3"> About </LinkItem>  </Link>
             <Link to="tech" smooth = {true} duration = {200}> <LinkItem className = "mx-3"> Tecnologías </LinkItem></Link>
             <Link to="port" smooth = {true} duration = {200}> <LinkItem className = "mx-3"> Portafolio </LinkItem></Link>
            <hr />
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4">
            <h2 className = "text-center mt-5" css = {css`
              color: #445377;
            `}> ANDRE   TIRADO </h2>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4 mt-5 text-center">
            <hr />
              <Link to="footer" smooth = {true} duration = {200}> <LinkItem className = "mx-3"> Contacto </LinkItem> </Link>
              <Link to="footer" smooth = {true} duration = {200}> <LinkItem className = "mx-3"> Blog </LinkItem> </Link>
            <hr />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header2
