import React from 'react';
//import { MDBTable, MDBTableBody, MDBTableHead, MDBCardBody } from 'mdbreact';

const MenuTable = props => {
  return (
    <>
    <table class="table table-sm">
  <thead class="info-color text-white">
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
  <tr><th colspan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>DESAYUNO</strong></h3></div></th></tr>
    <tr>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>@desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
      <td>desayuno lunes</td>
    </tr>
    <tr><th colspan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>1/2 MAÑANA</strong><h5 className="text-dark">1 pieza de fruta;Barrita de cereales; Tostada con aceite o tomate</h5></h3></div></th></tr>
    <tr><th colspan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>COMIDA</strong></h3></div></th></tr>
    <tr>
    <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
      <td>comida lunes</td>
    </tr>
    <tr><th colspan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>MERIENDA</strong><h5 className="text-dark">1 pieza de fruta;Barrita de cereales; Yogur Natural; Puñado de frutos secos.</h5></h3></div></th></tr>
    <tr><th colspan="8"><div className="container #e65100 orange darken-4-color text-white"><h3><strong>CENA</strong></h3></div></th></tr>
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


</>
  );
}

export default MenuTable;

