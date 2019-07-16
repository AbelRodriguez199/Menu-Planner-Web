import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCardBody } from 'mdbreact';

const MenuTable = props => {
  return (
    <MDBTable>
      <MDBTableHead color="success-color" textWhite>
        <tr>
          <th>LUNES</th>
          <th>MARTES</th>
          <th>MIERCOLES</th>
          <th>JUEVES</th>
          <th>VIERNES</th>
          <th>SABADO</th>
          <th>DOMINGO</th>
        </tr>
      </MDBTableHead>
     <div className="container bg-primary"><h3><strong>DESAYUNO</strong></h3></div>
    
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <MDBTableHead color="primary-color align-middle" textWhite><h3 class="full-strip-title full-width"><strong>DESAYUNO</strong></h3></MDBTableHead>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default MenuTable;

