import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-12">
      <ul className="navbar-nav">
  <li className="nav-item text-success "><Link to="/">Inicio</Link></li>
  
      <li className="nav-item text-success ml-2 "><Link to="/categorys">Categorías</Link></li>
    </ul>
  <div className="navbar "> 
    <form className="form-inline my-2 my-lg-0 ">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default navbar;