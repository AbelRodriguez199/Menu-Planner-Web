import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddCategory from './AddCategory'; // <== !!!

class CategoryList extends Component {
  constructor(){
      super();
      this.state = { listOfCategorys: [] };
  }

  getAllCategorys = () =>{
    axios.get(`http://localhost:5000/api/categorys`)
    .then(responseFromApi => {
      this.setState({
        listOfCategorys: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllCategorys();
  }

  render(){
    return(
      <div className="d-flex p-2 bd-highlight">
        <div className="card-header mb-4" style={{width: '100%', float:"center"}}>
          { this.state.listOfCategorys.map( category => {
            return (
              <div className="card-title btn-secondary" key={category._id}>
                <Link to={`/categorys/${category._id}`}>
                  <h3 className="card-header btn-body text-light" >{category.title}     <span className="badge badge-primary badge-pill btn-dark">{category.recipes.length}<a> Recetas</a></span></h3>
                <img src="data:image/jpeg;base64,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" width="100" height="100" className="mr-3" alt="..."/>
                </Link>
                {/* 🥁 added so the recipes can be displayed:  🥁 */}
                {/*<ul className="list-group list-group-horizontal ml-4" >
                 { category.recipes.map((recipe, index) => { 
                    return <li className="list-group-item list-group-item-primary btn-danger" key={index}>{recipe.title} </li> 
                  }) } 
                </ul> */} 
                {/* <p style={{maxWidth: '400px'}} >{category.description} </p> */}
              </div>              
            )})
          }
        </div>
        
        <div className="btn " style={{width: '50%', float:"left"}}>
        <div className="card title ">
        <div className="card-header mb-4 btn-body ">
          Añadir una Categoría Nueva
            </div>
            <AddCategory getData={() => this.getAllCategorys()}/> {/* <== !!! */}
            </div>
        </div>
      </div>
    )
  }
}

export default CategoryList;