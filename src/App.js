import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import CategoryList from './components/categorys/CategoryList';
//import Navbar from './components/navbar/Navbar';
import CategoryDetails from './components/categorys/CategoryDetails';
import RecipeDetails from './components/recipes/RecipeDetails';
import IngredientDetails from './components/ingredients/IngredientDetails';
import Menu from './components/menu/Menu';
import Home from './components/Home';
import NavbarPage from './NavbarPage';

//import FormUser from './components/user/FormUser';
class App extends Component {
  render() {
    return (
      <div className="App">
       <NavbarPage />
       <main className="container-fluid align-middle">      
        <Switch>
          <Route exact path="/categorys" component={CategoryList}/>
          <Route exact path="/categorys/:id" component={CategoryDetails} />
          {/* added to display recipe details page: */}
          <Route exact path="/categorys/:id/recipes/:recipeId" component={RecipeDetails} /> {/* <== !!! */}
          <Route exact path="/categorys/:id/recipes/:recipeId/ingredients/:ingredientId" component={IngredientDetails} /> {/* <== !!! */}
          <Route exact path="/menus" component={Menu} />
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/formuser" component={FormUser} />*/}
        </Switch>
     
        </main>
      </div>
    );
  }
}

export default App;
