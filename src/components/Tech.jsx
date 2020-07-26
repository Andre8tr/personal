import React from 'react'
import IReact from '../assets/img/tech/react.png'
import INode from '../assets/img/tech/node.png'
import IFirebase from '../assets/img/tech/-firebase.jpg'
import IAngular from '../assets/img/tech/angular.png'
import IMongo from '../assets/img/tech/mongodb.png'
import IMysql from '../assets/img/tech/my.png'
import ICs from '../assets/img/tech/c.png'
import Express from '../assets/img/tech/express.png'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'




const Tech = () => {
  const Image = styled.img`
    transition:all 0.3s ease;
    width: 150px;
    &:hover{
      webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      transition:all 0.3s ease;
    }
  `

  return(
    <article id="tech">
      <div className ="container text-center">
        <h2> Tecnologías que utilizo </h2>
        <div className = "row text-justify">
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {IReact} alt ="" className = "img-fluid"/>
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {INode} alt ="" className = "img-fluid" />
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {IFirebase} alt ="" className = "img-fluid" />
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {IAngular} alt ="" className = "img-fluid" />
          </div>
        </div>


        <div className = "row mt-4 text-justify">
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {IMongo} alt ="" className = "img-fluid"/>
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {IMysql} alt ="" className = "img-fluid"/>
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {ICs} alt ="" className = "img-fluid"/>
          </div>
          <div className = "col-sm-12 col-md-3 col-lg-3">
              <Image src = {Express} alt ="" className = "img-fluid"/>

          </div>
        </div>
      </div>
    </article>
  )
}

export default Tech
