import React, { Component } from 'react';
import axios from 'axios';

class EditRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theRecipe.title, 
        description: this.props.theRecipe.description
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/recipes/${this.props.theRecipe._id}`, { title, description })
    .then( () => {
        this.props.getTheRecipe();
        // after submitting the form, redirect to '/recipes'
        this.props.history.push(`/categorys/${this.props.theCategory._id}/recipes`);    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Modificar Receta</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          
          <input type="submit" value="Modificar" />
        </form>
      </div>
    )
  }
}

export default EditRecipe;