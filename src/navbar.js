import React, {Component} from 'react';
import './App.css';
import './animate.css';
import store from './store';
import {Button,CardPanel, Row, Col, Navbar, NavItem} from 'react-materialize';

class navbar extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <div>
      <Navbar brand='NimbleBucket' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
      {this.props.children}
      </div>
    );
  }
}

export default navbar;
