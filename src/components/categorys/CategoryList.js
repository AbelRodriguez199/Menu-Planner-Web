import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddCategory from './AddCategory'; // <== !!!

class CategoryList extends Component {
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
      <div className="d-flex p-2 bd-highlight">
        <div className="card-header mb-1" style={{width: '100%', float:"center"}}>
          { this.state.listOfCategorys.map( category => {
            return (
              <div className="card-title stylish-color" key={category._id}>
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
        
        <div className="btn " style={{width: '50%', float:"left"}}>
        <div className="card title ">
        <div className="card-header mb-4 btn-body ">
          Añadir una Categoría Nueva
            </div>
            <AddCategory getData={() => this.getAllCategorys()}/> {/* <== !!! */}
            </div>
        </div>
      </div>
    )
  }
}

export default CategoryList;