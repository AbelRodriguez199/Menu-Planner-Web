import React, { Component } from 'react';
import axios from 'axios';
//import { Redirect, Link } from 'react-router-dom'

class AddCategory extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;

    axios.post("http://localhost:5000/api/categorys", { title, description })
    .then( () => {
        this.props.getData();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label for="category">Categoría:</label>
          <input type="text" style={{width: '40%', float:"right"}} name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
          <label>Descripción:</label>
          <textarea name="description" style={{width: '40%', float:"right"}} className="form-control" value={this.state.description} onChange={ e => this.handleChange(e)} />
          </div>
          <input type="submit" value="Enviar" />
          
        </form>
      </div>
    )
  }
}

export default AddCategory;