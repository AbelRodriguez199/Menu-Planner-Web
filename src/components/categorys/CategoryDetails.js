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
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditCategory theCategory={this.state} getTheCategory={this.getSingleCategory} {...this.props} />
    }
  }

// DELETE Category:
  deleteCategory = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/categorys/${params.id}`)
    .then( () =>{
        this.props.history.push('/categorys'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddRecipeForm = () => {
    if(!this.state.title){
        this.getSingleCategory();
      } else {     
                // pass the category and method getSingleCategory() as a props down to AddRecipe component
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
        {/* show the recipe heading only if there are recipes */}</div>

        <a className="d-flex align-items-center btn btn-primary text-center text-white text-wrap font-weight-bold mb-2" onClick={() => this.deleteCategory()}>Borrar Categoría {/* <== !!! */}</a>
        <a className="d-flex align-items-center btn btn-primary text-center text-white text-wrap font-weight-bold" >{this.renderAddRecipeForm()}</a>
  </div>
</div>
</div>
</div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">{ this.state.recipes && this.state.recipes.length > 0 && <h3>Recetas de {this.state.title} </h3> }
        {/* map through the array of recipes and... */}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{ this.state.recipes && this.state.recipes.map((recipe, index) => {
            return(
                <div key={ index }>
                {/* ... make each recipe's title a link that goes to the recipe details page */}
                    <Link to={`/categorys/${this.state._id}/recipes/${recipe._id}`}> 
                        { recipe.title }
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
        <Link to={'/categorys'}>Volver a Categorías</Link>
      </div>
    )
  }
}

export default CategoryDetails;