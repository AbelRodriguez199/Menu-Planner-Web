import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
//import AddCategory from '../categorys/AddCategory';
import MenuTable from './MenuTable';

class Menu extends Component {
    constructor(){
        super();
        this.state = { listOfCategorys: [] };
    }
  
    getAllCategorys = () =>{
      axios.get(`http://localhost:5000/api/categorys`)
      .then(responseFromApi => {
        this.setState({
          listOfCategorys: responseFromApi.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllCategorys();
    }
  
    render(){
      return(
        <div className="p-2 bd-highlight">
          <div className="card-header mb-1" style={{width: '100%', float:"center"}}>
            { this.state.listOfCategorys.map( category => {
              return (
                <div className="card-title btn-secondary" key={category._id}>
                  <Link to={`/categorys/${category._id}`}>
                    <h3 className="card-header btn-body text-light" >{category.title}     <span className="badge badge-primary badge-pill btn-dark">{category.recipes.length}<small href="###"> Recetas</small></span></h3>
                  </Link>
                  {/* 🥁añadido para que las recetas se puedan mostrar   🥁 */}
                  {/*<ul className="list-group list-group-horizontal ml-4" >
                   { category.recipes.map((recipe, index) => { 
                      return <li className="list-group-item list-group-item-primary btn-danger" key={index}>{recipe.title} </li> 
                    }) }
                  </ul>*/} 
              
                  {/* <p style={{maxWidth: '800px'}} >{category.description} </p> */}
                </div>              
              )})
            }
            
          </div>
          <MenuTable />
        </div>
      )
    }
  }
  
  export default Menu;

