import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Info from './misc/info';

class Home extends Component {
    render(){
        return (
            <div className="d-flex p-2 bd-highlight">
            <div className="card col-8">
            <h1 className="display-4">Componente principal</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <h3> <Link to="/categorys" className="btn btn-primary">Ver Categorías</Link></h3>
            <Info />
          </div>
          
          
          </div>
            
         
        )
    }
    
}

export default Home