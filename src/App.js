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
import NavbarPage from './components/navbar/NavbarPage';
//import FormUser from './components/user/FormUser';
import MenuRandomList from './components/menu/MenuRandomList';
import NotFound from './components/misc/NotFound';
import MenuRandomBase from './components/menu/MenuRandomBase';


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
          <Route exact path="/random-menu" component={MenuRandomList} />
          <Route exact path="/menus" component={MenuRandomBase} />
          {/*<Route exact path="/menus/new" component={MenuRandomForm} />*/}
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/formuser" component={FormUser} />*/}
          <Route path="/" component={NotFound}/>
        </Switch>
     
        </main>
      </div>
    );
  }
}

export default App;
