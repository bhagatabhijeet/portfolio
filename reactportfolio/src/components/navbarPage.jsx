import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse 
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {    
    return (
        <MDBNavbar
          expand="md"
          className="sticky-top nav-custom">                    
            <MDBNavLink to="/portfolio">
              <div id="logodiv">A</div>
              </MDBNavLink>
            <MDBNavLink to="/portfolio">
              <div className="head-name">ABHIJEET</div>
              </MDBNavLink>            
          <MDBNavbarToggler onClick={this.toggleCollapse} className="custom-toggler"/>
          <MDBCollapse id="navbarNav" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              {this.props.links.map(navitem => {
                 return(
                  <MDBNavItem key={navitem}>
                  <MDBNavLink to={`/portfolio/${navitem}`}>
                    <span> {navitem.charAt(0).toUpperCase()+ navitem.slice(1)}</span>
                  </MDBNavLink>
                </MDBNavItem>
                 );
              })}             
            </MDBNavbarNav>            
          </MDBCollapse>
        </MDBNavbar>      
    );
  }  
}

export default NavbarPage;
