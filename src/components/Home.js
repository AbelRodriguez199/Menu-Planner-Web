import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return (
            <div className="d-flex p-2 bd-highlight">
            <div className="card col-8">
            <h1 className="display-4">Componente principal</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <h3>Categorías <Link to="/categorys" className="btn btn-primary">Nueva Categoría</Link></h3>
          </div>
          
          
          </div>
            
         
        )
    }
    
}

export default Home