//import React from 'react'
import photo from '../assets/img/photo.jpg'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


const About = () => {
  return(
    <article>
      <div className="jumbotron jumbotron-fluid mt-3">
        <div className="container">
          <div className = "row">
            <div className = "col-sm-12 col-md-6 col-lg-6">
              <h1 className="display-4">Acerca de mi</h1>
              <p className="lead text-justify">¡Hola! Me llamo Andre Tirado y soy ingeniero en sistemas, me especializo en desarrollo web haciendo páginas web y sistemas en la nube con las ultimas tecnologías en el mercado
              como React Js, Node Js, Bootstrap, Angular etc...</p> <br />
              <p className = "lead">Contactame para poder hacer tu idea una realidad</p><br />
              <p className = "lead"> Tambíen brindo tutorías de programación y matematicas para estudiantes.</p>
            </div>
            <div className = "col-sm-12 col-md-6 col-lg6 text-center">
              <img src={photo} className="img-fluid" alt="Responsive" css = {css`
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
