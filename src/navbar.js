import React, {Component} from 'react';
import './App.css';
import './animate.css';
import store from './store';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class navbar extends Component
{
  constructor(props)
  {
    super(props);
    this.state ={
      isOpen:false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <p>NimbleBucket</p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                <LinkContainer to="/Timer" >
                  <MenuItem eventKey={3.1}>Timers</MenuItem>
                </LinkContainer>
                <LinkContainer to="/PixelArt" >
                  <MenuItem eventKey={3.2}>Pixel Art</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <Navbar.Text>
                <Navbar.Link href="http://github.com" >GitHub</Navbar.Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{padding:"40px"}}></div>
        {this.props.children}
      </div>
    );
  }
}

export default navbar;
