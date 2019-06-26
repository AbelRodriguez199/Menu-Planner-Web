import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddRecipe from './AddRecipe'; // <== !!!

class RecipeList extends Component {
  constructor(){
      super();
      this.state = { listOfRecipes: [] };
  }

  getAllRecipes = () =>{
    axios.get(`http://localhost:5000/api/categorys/${params.id}/recipes/${params.recipeId}`)
    .then(responseFromApi => {
      this.setState({
        listOfRecipes: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  render(){
    return(
      <div className="d-flex p-2 bd-highlight">
        <div className="card-header mb-4" style={{width: '100%', float:"center"}}>
          { this.state.listOfRecipes.map( recipe => {
            return (
              <div className="card-title btn-secondary" key={recipe._id}>
                <Link to={`/categorys/${category._id}/recipes/${recipe._id}`}>
                  <h3 className="card-header btn-body text-light" >{recipe.title}     <span className="badge badge-primary badge-pill btn-dark">{recipe.ingredients.length}<a> Ingredientes</a></span></h3>
                </Link>
                {/* 🥁 added so the ingredients can be displayed:  🥁 */}
                <ul className="list-group list-group-horizontal ml-4" >
                 { category.recipes.ingredients.map((ingredient, index) => { 
                    return <li className="list-group-item list-group-item-primary btn-danger" key={index}>{ingredient.name} </li> 
                  }) } 
                </ul>  
                {/* <p style={{maxWidth: '400px'}} >{recipe.description} </p> */}
              </div>              
            )})
          }
        </div>
        
        <div className="btn  "style={{width: '50%', float:"left"}}>
        <div className="card title ">
        <div class="card-header mb-4 btn-body ">
          Añadir una Receta Nueva
            </div>
            <AddRecipe getData={() => this.getAllRecipe()}/> {/* <== !!! */}
            </div>
        </div>
      </div>
    )
  }
}

export default RecipeList;