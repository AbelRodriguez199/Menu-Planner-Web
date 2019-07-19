import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Info extends Component {
    render(){
        return (

<div className="row justify-content-center  d-flex text-center mt-5">
					<div className="col-md-4 col-feature">
						<div className="m-shadow-32 btn-primary bgd-gradient-light-blue rounded-circle justify-center border border-light d-inline-block p-4 mb-4">
							<i className="fa fa-cog  fa-3x fa-fw " aria-hidden="true"></i>
						</div>
						<h4>Categorías</h4>
						<p>Crea tus propias categorías de Recetas para equilibrar tu menú semanal.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2"><Link to="/categorys">Ver Detalles</Link></small></p>
					</div>
					<div className="col-md-4 col-feature">
						<div className="m-shadow-32 btn-success bgd-gradient-blue rounded-circle justify-center border border-light d-inline-block p-4 mb-4">
							<em className="fa fa-3x fa-fw  fa-cutlery "></em>
						</div>
						<h4>Menú Semanal</h4>
						<p>Confecciona tu menú semanal para organizar tu lista de la compra y tu forma de cocinar.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2"><Link to="/menus">Ver Detalles</Link></small></p>
					</div>
					<div className="col-md-4 col-feature">
						<div className=" m-shadow-32 btn-secondary rounded-circle justify-center border border-light d-inline-block p-4 mb-4">
							<em className="fa fa-3x fa-list-alt"></em>
						</div>
						<h4>Lista de la Compra</h4>
						<p>Al crear tu propia organización de recetas con el menú semanal, crearás automáticamente tu lista de la compra.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2" href="#" role="button">Ver Detalles</small></p>
					</div>
                <div className="card col-12">
                
  <div className="footer text-light">
    <div className="   bg-dark pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <small href="#"><svg className="d-block mb-4" width="36" height="36" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Bootstrap</title><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg></small>
            <address className="color-light-20">
              Paseo de la Chopera, 14<br/>
              28045 Madrid
            </address>
          </div>
          
          <div className="col-xs-6 col-sm-3">
            <h4 className="my-2">Producto</h4>
            <ul className="list-unstyled list-light">
              <li><Link to="/categorys">Categorías</Link></li>
              <li><small href="#">Menú semanal</small></li>
              <li><small href="#">Lista de la Compra</small></li>
            </ul>
          </div>
          <br  className="hidden-sm-up"/>
          <div className="col-xs-6 col-sm-3">
            <h4 className="my-2">Company</h4>
            <ul className="list-unstyled list-light">
              <li><small href="#">About Us</small></li>
              <li><small href="#">Blog</small></li>
              <li><small href="#">Careers</small></li>
              <li><small href="#">Press</small></li>
              <li><small href="#">Events</small></li>
              <li><small href="#">Contact</small></li>
            </ul>
          </div>
            <div className="col-xs-6 col-sm-3">
                <h4 className="my-2">Síguenos</h4>
                <ul className="list-unstyled list-light">
                  <li><i className="fa fa-facebook btn-primary text-light" aria-hidden="true"></i><a href="https://www.facebook.com/"> Facebook</a></li>
                  <li><i className="fa fa-twitter btn-light text-primary" aria-hidden="true"></i><a href="https://twitter.com/?lang=es"> Twitter</a></li>
                  <li><i className="fa fa-instagram btn-danger text-light" aria-hidden="true"></i><a href="https://www.instagram.com/?hl=es"> Instagram</a></li>
                </ul>
                <p className="color-light mt-2">Novedades!</p>
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control form-control-sm" name="email" placeholder="Tu Email"/>
                      <span className="input-group-btn">
                        <button className="btn btn-info btn-sm" type="submit">OK</button>
                      </span>
                    </div>
                  </div>
                </form>
             </div>
        </div>
        <hr/>
        <div className="row f-flex justify-content-between" >
          <div className="col-md-8 text-xs-center  text-left text-secondary my-1">
            <p className="mt-2  text-light"> © Copyright 2019 • Todos los Derechos Reservados |  <small className=" " href="#">Contacto</small></p>
          </div>
          <div className="col-md-4 text-xs-center   text-lg-right text-secondary my-1">
            <div className="btn-container  mt-1 text-md-right text-sm-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
      )
    }
    
}

export default Info