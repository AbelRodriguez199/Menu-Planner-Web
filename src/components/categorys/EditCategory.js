import React, { Component } from 'react';
import axios from 'axios';

class EditCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theCategory.title, 
        description: this.props.theCategory.description
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.put(`http://localhost:5000/api/categorys/${this.props.theCategory._id}`, { title, description })
    .then( () => {
        this.props.getTheCategory();
        // after submitting the form, redirect to '/categorys'
        this.props.history.push('/categorys');    
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
        <h3>Modificar Categoría</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Categoría:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Descripción:</label>
          <input name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
         
          <input className="fa fa-cog" type="submit" value="Modificar" />
        </form>
      </div>
    )
  }
}

export default EditCategory;