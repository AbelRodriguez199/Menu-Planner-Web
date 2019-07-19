import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact';
//import { Router } from 'react-router-dom';

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div className="btn mt-4">
       
          <header>
            <MDBNavbar color="black" fixed="top" dark expand="md">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <strong>Inicio</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink to="/menus">Menu Semanal</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/categorys">Categorías</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/users">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            </header>
      </div>
    );
  }
}

export default NavbarPage;