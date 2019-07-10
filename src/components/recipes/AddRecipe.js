import React, { Component } from 'react';
import axios from 'axios';

class AddRecipe extends Component {
  constructor(props){
      super(props);               
                            
      this.state = { title: "", description: "", isShowing: false };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const categoryID = this.props.theCategory._id; // para saber con que categoría fué creada esta receta
                                               
    
    
    axios.post("http://localhost:5000/api/recipes", { title, description, categoryID })
    .then( () => {
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
                  <form onSubmit={this.handleFormSubmit}>
                  <label>Nombre:</label>
                  <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
                  <label>Descripción:</label>
                  <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                  
                  <input type="submit" value="Añadir" />
                  </form>
            </div>
          )
    }
  }

  render(){
    return(
      <div>
            <button className="btn btn-info" onClick={() => this.toggleForm()}> 
             <i className="fa fa-plus-circle fa-lg"></i> Añadir Receta </button>
            { this.showAddRecipeForm() }
      </div>
    )
  }
}

export default AddRecipe;