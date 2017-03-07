import React, {Component} from 'react';
import '../../App.css';
import '../../animate.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button} from 'react-bootstrap';

class Home extends Component
{
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div>
        <Jumbotron bsStyle="secondary">
          <h1>Welcome!</h1>
          <p>The intention of this website is to show my progress in developing my web developer skills. Currently this site is created with React, Redux, and React-Bootstrap.</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
