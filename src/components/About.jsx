import React from 'react'
import photo from '../assets/img/photo.jpg'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'


const About = () => {
  return(
    <article>
    {/*   <div className = "container mt-5">
        <h4 className = "text-center"> Ingeniero en sistemas</h4>
        <h5 className = "text-center">Contacta conmigo para poder convertir en realidad tus ideas</h5>
      </div>*/}
      <div className="jumbotron jumbotron-fluid mt-3">
        <div className="container">
          <div className = "row">
            <div className = "col-sm-12 col-md-6 col-lg-6">
              <h1 className="display-4">Acerca de mi</h1>
              <p className="lead">¡Hola! Me llamo Andre Tirado y soy ingeniero en sistemas, me especializo en desarrollo web con las ultimas tecnologías en el mercado como React Js, Node Js, Bootstrap, Angular etc...</p>
            </div>
            <div className = "col-sm-12 col-md-6 col-lg6 text-center">
              <img src={photo} class="img-fluid" alt="Responsive image" css = {css`
                height: 350px;
                border-radius: 10%;
              `}/>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default About
