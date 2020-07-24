import React from 'react'
import IReact from '../assets/img/tech/react.png'
import INode from '../assets/img/tech/node.png'
import IFirebase from '../assets/img/tech/-firebase.jpg'
import IAngular from '../assets/img/tech/angular.png'
import IMongo from '../assets/img/tech/mmm.png'
import IMysql from '../assets/img/tech/remysql.jpg'
import ICs from '../assets/img/tech/c.png'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'


const Tech = () => {
  const Image = styled.img`
    transition:all 0.3s ease;
    &:hover{
      webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      transition:all 0.3s ease;
    }
  `

  return(
    <article>
      <div className ="container text-center">
        <h2> Tecnologías que utilizo </h2>
        <div className = "row text-justify">
          <div className = "col-sm-12 col-md-3 col-lg-3">
            <div className="card" >
              <Image src = {IReact} alt ="" className = "img-fluid"/>
              <div className="card-body">
                <p className="card-text">Amplio conocimiento en React, con temas como JSX, Redux, Hooks, Props, Router.</p>
              </div>
            </div>
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
            <div className="card" >
              <Image src = {INode} alt ="" className = "img-fluid" />
              <div className="card-body">
                <p className="card-text">Conocimiento en temas con back-end con frameworks como Express y MongoDB.</p>
              </div>
            </div>          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
            <div className="card" >
              <Image src = {IFirebase} alt ="" className = "img-fluid" />
              <div className="card-body">
                <p className="card-text">Utilizo Firebase en algunos proyectos que me sirve como base de datos.</p>
              </div>
            </div>          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
            <div className="card" >
              <Image src = {IAngular} alt ="" className = "img-fluid" />
              <div className="card-body">
                <p className="card-text">Amplio conocimiento de Angular como Directivas, Componentes, Rutas etc....</p>
              </div>
            </div>
          </div>
        </div>


        <div className = "row mt-4 text-justify">
          <div className = "col-sm-12 col-md-4 col-lg-4">
            <div className="card" >
              <Image src = {IMongo} alt ="" className = "img-fluid"/>
              <div className="card-body">
                <p className="card-text">Realización de CRUD con tecnologías de bases de datos no relacionales.</p>
              </div>
            </div>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4">
            <div className="card" >
              <Image src = {IMysql} alt ="" className = "img-fluid"/>
              <div className="card-body">
                <p className="card-text">Amplio conocimiento con tecnologías SQL: MySql y Sql Server.</p>
              </div>
            </div>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg-4">
            <div className="card" >
              <Image src = {ICs} alt ="" className = "img-fluid"/>
              <div className="card-body">
                <p className="card-text">Amplio conocimiento en lenguaje C# con el cual aprendí a programar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tech
