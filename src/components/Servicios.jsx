import React from 'react'
import {FaBeer} from 'react-icons/fa'
import { BsWrench, BsTerminalFill, BsServer, BsAspectRatioFill } from 'react-icons/bs'

const Servicios = () => {
  return(
      <article className = "">
        <h2 className = "text-center mt-4"> Mis Habilidades </h2>
        <div className = "row mx-4" >
          <div className = "col-sm-12 col-md-4 col-lg4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Front-End <BsAspectRatioFill /></h5>
                <p className="card-text">Desarrollo el front-end con las siguientes habilidades</p>
                <ul class="list-group">
                  <li class="list-group-item">HTML</li>
                  <li class="list-group-item">CSS</li>
                  <li class="list-group-item">Javascript</li>
                  <li class="list-group-item">React Js</li>
                  <li class="list-group-item">Angular Js</li>
                  <li class="list-group-item">Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Back-End <BsServer /></h5>
              <p className="card-text">En el Back-End trabajo con las siguientes tecnologías</p>
              <ul class="list-group">
                <li class="list-group-item">MySql</li>
                <li class="list-group-item">Sql Server</li>
                <li class="list-group-item">NodeJs</li>
                <li class="list-group-item">Firebase - Firestore</li>
                <li class="list-group-item">Apis</li>
              </ul>
            </div>
          </div>
          </div>
          <div className = "col-sm-12 col-md-4 col-lg4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Herramientas <BsTerminalFill /></h5>
              <p className="card-text">Utilizo las siguientes herramientas para mi desarrollo</p>
              <ul class="list-group">
                <li class="list-group-item">Linux - Windows 10</li>
                <li class="list-group-item">Atom</li>
                <li class="list-group-item">GitHub</li>
                <li class="list-group-item">Postman</li>
                <li class="list-group-item">Robo3T</li>
                <li class="list-group-item">MySql WorkBench</li>
                <li class="list-group-item">Sql Server</li>
                <li class="list-group-item">VisualStudio 2015+</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </article>
  )
}

export default Servicios
