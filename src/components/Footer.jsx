import React, {useState, useEffect} from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const Footer = () => {
  return(
    <footer id="footer">
      <div className = "fluid mt-5" css = {css`
        background-color: #494949;
        color: white;
      `}>
        <div className = "container mt-5">
          <div className = "row mt-5">
            <div className = "col-sm-12 col-md-6 col-lg-6">
              <h3 className = "mt-5"> Mis redes sociales </h3>
            </div>
            <div className = "col-sm-12 col-md-6 col-lg-6">
              <h3 className = "mt-5"> Contaca directamente conmigo </h3>
              <form>
                <div className="form-group">
                  <label for="exampleInputPassword1">Nombre: </label>
                  <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre " />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Correo: </label>
                  <input type="email" className="form-control" id="mail" aria-describedby="emailHelp" placeholder="Ingresa tu email" />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Ingresa tu mensaje</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-5">Enviar</button>
              </form>
            </div>
          </div>
          <div className = "row fluid">
            <div className = "col-sm-12 col-md-12 col-lg-12">
              <p> Coyright © Andre Tirado 2020 </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
