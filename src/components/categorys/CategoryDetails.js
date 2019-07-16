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
         <div className="align-middle">
         <h3 className="card-header text-center align-middle font-weight-bold text-uppercase py-4"> {this.state.title} (Categoría)</h3>
         
         <div className="card-header">
        <div className="d-flex justify-content-center">
<div className="p-2 bd-highlight">
<div className="card-body">
        <p>{this.state.description}</p>
        {/* muestra el encabezado de las recetas solo si hay recetas */}</div>
        
        {/* Botón Borrar Categoría */}
        <button className="btn btn-danger" onClick={() => this.deleteCategory()}>
          <i className="fa fa-trash-o fa-lg"></i> Borrar Categoría</button>
        
  </div>
</div>
</div>
</div>
<div className="card">
        { this.state.recipes && this.state.recipes.length > 0 && <h3 className="display-4 p-0 mb-2 bg-dark text-white">Recetas de {this.state.title} </h3> }
  <div className="card-body">
    <div id="table" className="table-editable">
      <span className="table-add float-right mb-3 mr-2"><a href="#!" className="text-success">{this.renderAddRecipeForm()}</a></span>
      <table className="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <th className="text-center">Categoría</th>
            <th className="text-center">Recetas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-3-half">{this.state.title}</td>
            <td className="pt-3-half">{ this.state.recipes && this.state.recipes.map((recipe, index) => {
            return(
                <div key={ index }>
                {/* ... hacer de cada titulo de receta un link que lleve a la pápgina de detalle recetas*/}
                <p>{ recipe.title }  <Link to={`/categorys/${this.state._id}/recipes/${recipe._id}`}> 
                     <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link></p>
                    
                </div>
            )
            
        }) }</td>
          </tr>        
        </tbody>
      </table>
    </div>
  </div>
</div>
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