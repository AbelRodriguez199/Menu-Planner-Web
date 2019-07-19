import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => (
   
    <div id="notfound">
    <div className="notfound">
    <div className="notfound-404">
    <h1>404</h1>
    </div>
    <br></br>
    <h2>Oops! Esta página no se encuentra</h2>
    <br></br><br></br>
    <p>Lo sentimos, pero la página que estás mirando no existe, 
    <p>ha sido eliminada, ha cambiado de nombre o está temporalmente fuera de servicio.</p></p>
    <div><Link to={'/'}  className="stylish-color">Ir a Inicio</Link></div>
    </div>
    </div>

)

export default NotFound