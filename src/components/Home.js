import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
import Info from './misc/info';
import './Home.css';
import { MDBContainer, MDBView, MDBMask } from "mdbreact";


class Home extends Component {
    render(){
        return (
            <div className="d-flex p-2 bd-highlight">
            <div className="card col-12">
            <MDBView src="http://amydix.com/wp-content/uploads/2017/04/mealplanning.jpg">
            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
              <h2>Menu Planner</h2>
              <h5>Ordena tu forma de cocinar y comer</h5>
              <br />
              <p>Confecciona tu propio menu semanal y crea automáticamente tu lista de la compra para no perder tiempo </p>
            </MDBMask>
          </MDBView>
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
            <Info />
          </div>
          
          
          </div>
            
         
        )
    }
    
}

export default Home