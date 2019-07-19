import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom'
//import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
//import AddCategory from '../categorys/AddCategory';
//import MenuTable from './MenuTable';

class Menu extends Component {
    constructor(){
        super();
        this.state = { listOfCategorys: [] };
    }
  
    getAllCategorys = () =>{
      axios.get(`http://localhost:5000/api/random-menu`)
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
        <div className="p-2 bd-highlight">
          <table className="table table-sm">
  <thead className="info-color text-white">
    <tr>
      <th className="info-color border border-#26a69a teal lighten-1" scope="col">LUNES</th>
      <th className="info-color border border-#26a69a teal lighten-1" scope="col">MARTES</th>
      <th className="info-color mb-1 px-1 border border-#26a69a teal lighten-1" scope="col">MIÉRCOLES</th>
      <th className="info-color mb-1 px-1 border border-#26a69a teal lighten-1" scope="col">JUEVES</th>
      <th className="info-color mb-1 px-1 border border-#26a69a teal lighten-1"scope="col">VIERNES</th>
      <th className="info-color mb-1 px-1 border border-#26a69a teal lighten-1"scope="col">SÁBADO</th>
      <th className="info-color mb-1 px-1 border border-#26a69a teal lighten-1"scope="col">DOMINGO</th>
    </tr>
  </thead>
  
  <tbody>
  <tr><th colSpan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>DESAYUNO</strong></h3></div></th></tr>
    <tr>
      <td></td>
      <td></td>
      <td>desayuno lunes</td>
      <td>@desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
    </tr>
    <tr><th colSpan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>1/2 MAÑANA</strong><p className="text-dark">1 pieza de fruta;Barrita de cereales; Tostada con aceite o tomate</p></h3></div></th></tr>
    <tr><th colSpan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>COMIDA</strong></h3></div></th></tr>
    <tr>
    <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
    </tr>
    <tr><th colSpan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>MERIENDA</strong><p className="text-dark">1 pieza de fruta;Barrita de cereales; Yogur Natural; Puñado de frutos secos.</p></h3></div></th></tr>
    <tr><th colSpan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>CENA</strong></h3></div></th></tr>
    <tr>
      <td>cena lunes</td>
      <td>cena lunes</td>
      <td>cena lunes</td>
      <td>cena lunes</td>
      <td>cena lunes</td>
      <td>cena lunes</td>
      <td>cena lunes</td>
    </tr>
  </tbody>
</table>
        </div>
      )
    }
  }
  
  export default Menu;

