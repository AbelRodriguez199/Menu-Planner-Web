import React, { Component } from 'react';
import axios from 'axios';
//import { Redirect, Link } from 'react-router-dom'

class AddMenuRandom extends Component {
  constructor(props){
      super(props);
      this.state = { menu: "", };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const menu = this.state.menu;
    

    axios.post("http://localhost:5000/api/random-menu", { menu })
    .then( () => {
        this.props.getData();
        this.setState({ menu: "" });
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
          <label htmlFor="menu">Menu</label>
          <input type="text" style={{width: '40%', float:"right"}} name="menu" value={this.state.menu} onChange={ e => this.handleChange(e)}/>
          </div>
          <input type="submit" value="Enviar" />
          
        </form>
      </div>
    )
  }
}

export default AddMenuRandom;