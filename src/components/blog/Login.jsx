import React from 'react'
import './blog.css'

const Login = () => {
  return (
    <div className = "box-login">
      <div className = "login">
        <h3 className = "title">Ingreso a panel de Admin</h3>
        <input className = "user"
               type = "text"
               placeholder = "Ingresa el usuario">

        </input>
        <br />
        <input className = "password"
               type = "password"
               placeholder = "Ingresa la contraseña">

        </input>
        <button type = "submit"
                value = "Ingresar"
                className = "btn-ingresar">
          Ingresar
        </button>
        <button type = "submit"
                value = "Registrarse"
                className = "btn-registrarse">
          Registrarse
        </button>
      </div>
      <div className = "info">
        Hola
      </div>
    </div>
  )
}

export default Login
