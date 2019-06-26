import React, { Component } from 'react';
import axios from 'axios';


class IngredientDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getTheIngredient();
  }

  getTheIngredient = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/categorys/${params.id}/recipes/${params.recipeId}/ingredients/${params.ingredientId}`)
    .then( responseFromApi =>{
      const theIngredient = responseFromApi.data;
      this.setState(theIngredient);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.quantity}</p>
        <p>{this.state.measure}</p>
      </div>
    )
  }
}

export default IngredientDetails;