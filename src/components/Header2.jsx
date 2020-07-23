import React, {useState, useEffect} from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
//Imagenes
import Barra from '../assets/img/bar.jpg'



const Header2 = () => {
  //Constante de estilo para etiqueta "a"
  const Anchor = styled.a `
    text-decoration: none;
    color: black;
    transition: 0.3s;
    &:hover{
      text-decoration: none;
      color: black;
      transition: 0.3s;
      font-size: 110%;
      color:
    }`

    const Large = styled.img`
      height: 20px;
      width: 100%;
      display: block;
    `

  const [size, setSize] = useState(0)
  return(
    <header>
      <Large src ={Barra} alt="Hola" className="fluid"/>
      <div className="container">
        <div className = "row">
          <div className = "col-sm-12 col-md-4 col-lg-4 mt-5 text-center">
            <hr />
             <Anchor as = "a" href="google.com" className = "mx-3 anchor"> About </Anchor> <Anchor as = "a" href="google.com" className = "mx-3 anchor"> Tecnologías </Anchor> <Anchor href="" className = "mx-3"> Contacto </Anchor>
            <hr />
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4">
            <h2 className = "text-center mt-5" css = {css`
              color: #445377;
            `}> ANDRE   TIRADO </h2>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4 mt-5 text-center">
            <hr />
              <Anchor as = "a" href="google.com" className = "mx-3"> Portafolio </Anchor> <Anchor href="" className = "mx-3"> Blog </Anchor>
            <hr />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header2
