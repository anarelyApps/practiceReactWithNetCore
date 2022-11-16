import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
//import {useAuth0} from '.../auth0-wrapper';

/*const NavMenu = () => {
  const {isAuthenticated, loginWithRedirect, logout} = useAuth0();
  
  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            {isAuthenticated ? (
                 <ul className="navbar-nav flex-grow">
                 <NavItem>
                     <NavLink tag={Link} className="text-dark" to="/Create">Create</NavLink>
                   </NavItem>              
                  <NavItem>
                     <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
                   </NavItem>
                   <NavItem>
                     <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                   </NavItem>  
                   <NavItem>
                     <NavLink className="btn btn-danger" onClick={()=> logout()}>Log out</NavLink>
                   </NavItem>            
                 </ul>
            ):(
              <ul className="navbar-nav flex-grow">
              <NavItem>
                  <NavLink tag={Link} className="btn btn-success" onClick={()=> logoutWithRedirect()}>Log in</NavLink>
                </NavItem>
              </ul>
            )}
          </Collapse>
        </Navbar>
      </header>
    );
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Create">Create</NavLink>
              </NavItem>              
             <NavItem>
                <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>             
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}*/

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Create">Create</NavLink>
              </NavItem>              
             <NavItem>
                <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>             
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }

}

//export default NavMenu;