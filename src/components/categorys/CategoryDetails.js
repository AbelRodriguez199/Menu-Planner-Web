import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditCategory from './EditCategory';
import AddRecipe from '../recipes/AddRecipe';

class CategoryDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleCategory();
  }

  getSingleCategory = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/categorys/${params.id}`)
    .then( responseFromApi =>{
      const theCategory = responseFromApi.data;
      this.setState(theCategory);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleCategory();
    } else {
                                                                                           
      return <EditCategory theCategory={this.state} getTheCategory={this.getSingleCategory} {...this.props} />
    }
  }

// BORRAR Category:
  deleteCategory = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/categorys/${params.id}`)
    .then( () =>{
        this.props.history.push('/categorys');        
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddRecipeForm = () => {
    if(!this.state.title){
        this.getSingleCategory();
      } else {     
                // pasa la categoría y el método getSingleCategory () como props al componente AddRecipe
        return <AddRecipe theCategory={this.state} getTheCategory={this.getSingleCategory} />
      }
  }


  render(){
    return(
      <div>
         <div className="card">
         <div class="card-header">
        <div className="d-flex justify-content-center">
<div className="p-2 bd-highlight"><h1>{this.state.title}</h1>
<div className="card-body">
        <p>{this.state.description}</p>
        {/* muestra el encabezado de las recetas solo si hay recetas */}</div>

        {/* Botón Añadir Receta Nueva */}
        <small className="d-flex align-items-center btn" >{this.renderAddRecipeForm()}</small>
        
        {/* Botón Borrar Categoría */}
        <button class="btn btn-danger" onClick={() => this.deleteCategory()}>
          <i class="fa fa-trash-o fa-lg"></i> Borrar Categoría</button>
        
  </div>
</div>
</div>
</div>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">{ this.state.recipes && this.state.recipes.length > 0 && <h3 className="display-4 p-0 mb-2 bg-dark text-white">Recetas de {this.state.title} </h3> }
        {/* map que recorre el array de recetas y... */}</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td>{ this.state.recipes && this.state.recipes.map((recipe, index) => {
            return(
                <div key={ index }>
                {/* ... hacer de cada titulo de receta un link que lleve a la pápgina de detalle recetas*/}
                    <Link to={`/categorys/${this.state._id}/recipes/${recipe._id}`}> 
                        { recipe.title }
                    </Link>
                </div>
            )
            
        }) }</td>
    </tr>    
  </tbody>
</table>
        {/* Modificar Categoría */}
        <div>{this.renderEditForm()} </div>
        <br/>
      
        <br/><br/><br/><br/><br/>
        <Link to={'/categorys'}>Volver a Categorías</Link>
      </div>
    )
  }
}

export default CategoryDetails;