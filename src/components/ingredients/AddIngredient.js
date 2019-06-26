import React, { Component } from 'react';
import axios from 'axios';

class AddIngredient extends Component {
  constructor(props){
      super(props);          //             will help us to toggle add recipe form   
                            //                      |
      this.state = { name: "", quantity: "", measure: "", isShowing: false };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const quantity = this.state.quantity;
    const measure = this.state.measure;
    const recipeID = this.props.theRecipe._id; // <== we need to know to which recipe the created recipe belong, so we need to get its 'id'
                                                // it has to be the 'id' because we are referencing recipe
                                                // by its id in the recipe model on the server side ( recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'})
    
    // { title, description, recipeID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match
    axios.post("http://localhost:5000/api/ingredients", { name, quantity, measure, recipeID })
    .then( () => {
          // after submitting the form, retrieve recipe one more time so the new ingredient is displayed as well 
          //              |
        this.props.getTheRecipe();
        this.setState({name: "", quantity: "", measure: ""});
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

  showAddIngredientForm = () => {
    if(this.state.isShowing){
        return(
            <div>
                  <h3>Añadir Ingrediente</h3>
                  <form onSubmit={this.handleFormSubmit}>
                  <label>Nombre</label>
                  <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                  <label>Cantidad</label>
                  <input type="number" name="quantity" value={this.state.quantity} onChange={ e => this.handleChange(e)}/>
                  <label>Medida</label>
                  <input type="text" name="measure" value={this.state.measure} onChange={ e => this.handleChange(e)}/>

                  
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
            <button onClick={() => this.toggleForm()}> Añadir Ingrediente </button>
            { this.showAddIngredientForm() }
      </div>
    )
  }
}

export default AddIngredient;