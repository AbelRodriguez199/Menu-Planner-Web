import React, { Component } from 'react';
import axios from 'axios';

class AddRecipe extends Component {
  constructor(props){
      super(props);          //             will help us to toggle add recipe form   
                            //                      |
      this.state = { title: "", description: "", isShowing: false };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const categoryID = this.props.theCategory._id; // <== we need to know to which category the created recipe belong, so we need to get its 'id'
                                                // it has to be the 'id' because we are referencing category
                                                // by its id in the recipe model on the server side ( category: {type: Schema.Types.ObjectId, ref: 'Category'})
    
    // { title, description, categoryID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match
    axios.post("http://localhost:5000/api/recipes/:id", { title, description, categoryID })
    .then( () => {
          // after submitting the form, retrieve category one more time so the new recipe is displayed as well 
          //              |
        this.props.getTheCategory();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  toggleForm = () => {
      if(!this.state.isShowing){
          this.setState({isShowing: true});
      } else {
        this.setState({isShowing: false});
      }
  }

  showAddRecipeForm = () => {
    if(this.state.isShowing){
        return(
            <div>
                  <h3>Añadir Receta</h3>
                  <form onSubmit={this.handleFormSubmit}>
                  <label>Nombre</label>
                  <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
                  <label>Description:</label>
                  <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                  
                  <input type="submit" value="Añadir" />
                  </form>
            </div>
          )
    }
  }

  render(){
    return(
      <div>
            <hr />
            <button onClick={() => this.toggleForm()}> Añadir Receta </button>
            { this.showAddRecipeForm() }
      </div>
    )
  }
}

export default AddRecipe;