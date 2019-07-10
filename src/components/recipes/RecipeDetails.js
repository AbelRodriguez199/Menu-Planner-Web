import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditRecipe from '../recipes/EditRecipe';
import AddIngredient from '../ingredients/AddIngredient';

class RecipeDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleRecipe();
  }

  getSingleRecipe = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/categorys/${params.id}/recipes/${params.recipeId}`)
    .then( responseFromApi =>{
      const theRecipe = responseFromApi.data;
      this.setState(theRecipe);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleRecipe();
    } else {
                                                                                         
      return <EditRecipe theRecipe={this.state} getTheRecipe={this.getSingleRecipe} {...this.props} />
    }
  }

// BORRAR Recipe:
  deleteRecipe = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/categorys/${params.id}/recipes/${params.recipeId}`)
    .then( () =>{
        this.props.history.push('/recipes');     
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddIngredientForm = () => {
    if(!this.state.title){
        this.getSingleRecipe();
      } else {     
                // pasa la receta y el método getSingleRecipe() como props al componente AddIngredient
        return <AddIngredient theRecipe={this.state} getTheRecipe={this.getSingleRecipe} />
      }
  }


  render(){
    return(
      <div>
         <div className="card">
         <div className="card-header">
        <div className="d-flex justify-content-center">
<div className="p-2 bd-highlight"><h1>{this.state.title}</h1>
<div className="card-body">
        <p>{this.state.description}</p>
        <p>{this.state.measure}</p>
        {/* muestra el encabezado de ingredientes solo si hay ingredientes */}</div>

        {/* Botón Añadir Ingrediente Nuevo */}
        <small className="d-flex align-items-center btn" >{this.renderAddIngredientForm()}</small>
        {/* Botón Borrar Receta */}
        <button class="btn btn-danger" onClick={() => this.deleteRecipe()}>
          <i class="fa fa-trash-o fa-lg"></i> Borrar Receta</button>
  </div>
</div>
</div>
</div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">{ this.state.ingredients && this.state.ingredients.length > 0 && <h3>Ingredientes para {this.state.title} </h3> }
        {/* map recorriendoi el array de ingredients y... */}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{ this.state.ingredients && this.state.ingredients.map((ingredient, index) => {
            return(
                <div key={ index }>
                {/* ... hacer del nombre de cada ingrediente un Link que lleve al detalle de ingrediente */}
                    <Link to={`/categorys/${this.state._id}/recipes/${this.state.recipe._id}/ingredients/${ingredient._id}`}> 
                        { ingredient.name }
                    </Link>
                </div>
            )
            
        }) }</td>
    </tr>    
  </tbody>
</table>
        <div>{this.renderEditForm()} </div>
        <br/>
        <br/><br/><br/><br/><br/>
        <Link to={`/categorys/${this.state._id}`}>Volver a Recetas</Link>
      </div>
    )
  }
}

export default RecipeDetails;