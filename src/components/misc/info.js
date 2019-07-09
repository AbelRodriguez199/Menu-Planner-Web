import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Info extends Component {
    render(){
        return (

<div className="row justify-content-center  d-flex text-center mt-5">
					<div className="col-md-4 col-feature">
						<div className="m-shadow-32 bgd-gradient-light-blue rounded-circle justify-center border border-secondary d-inline-block p-4 mb-4">
							<em className="fa fa-2x fa-paint-brush text-light"></em>
						</div>
						<h4>Categorías</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2"><Link to="/categorys">Ver Categorías</Link></small></p>
					</div>
					<div className="col-md-4 col-feature">
						<div className="m-shadow-32 bgd-gradient-blue rounded-circle justify-center border border-secondary d-inline-block p-4 mb-4">
							<em className="fa fa-2x fa-desktop text-light"></em>
						</div>
						<h4>Responsive</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2" href="#" role="button">View details</small></p>
					</div>
					<div className="col-md-4 col-feature">
						<div className=" m-shadow-32 	bgd-gradient-light-blue rounded-circle justify-center border border-secondary d-inline-block p-4 mb-4">
							<em className="fa fa-2x fa-code text-light"></em>
						</div>
						<h4>Bootstrap 4</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p><small className="btn btn-md btn-outline-primary mt-2" href="#" role="button">View details</small></p>
					</div>
				</div>
      )
    }
    
}

export default Info