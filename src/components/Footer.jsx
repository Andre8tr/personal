//import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  const Anchor = styled.a`
    text-decoration: none !important;
    color: inhert;
  `
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
              <h2> <Anchor href ="https://github.com/Andre8tr" target="_blank">
                   <FaGithub css ={ css `
                      transition: all 0.3s ease;
                      text-decoration: none;
                      color: white;
                      &:hover{
                        webkit-transform: scale(1.2);
                        -ms-transform: scale(1.2);
                        transform: scale(1.2);
                        transition:all 0.3s ease;
                      }
                    `} />
                  </ Anchor>

              <Anchor href = "https://www.instagram.com/andre8t" target="_blank">
                <FaInstagram className = "mx-5"  css = {css`
                  color: white;
                  &:hover{
                    color: #cd486b;
                  }
                `} />
              </Anchor>

              <Anchor href = 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="_blank">
                <FaLinkedin href="google.com"  css = {css`
                  color: white;
                  &:hover{
                    color: #0e76a8;
                  }
                `}/>
              </Anchor>
             </h2>
            </div>
            <div className = "col-sm-12 col-md-6 col-lg-6">
              <h3 className = "mt-5"> Contaca directamente conmigo </h3>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Nombre: </label>
                  <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre " />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Correo: </label>
                  <input type="email" className="form-control" id="mail" aria-describedby="emailHelp" placeholder="Ingresa tu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Ingresa tu mensaje</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-5">Enviar</button>
              </form>
            </div>
          </div>

          <div className = "row fluid">
          <div className = "row">
          </div>
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
