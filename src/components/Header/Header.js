import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import {Navbar,Nav} from 'react-bootstrap';
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (


      <Navbar bg="light" expand="lg">
  <Navbar.Brand>Book Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link><Link className="nav-link" to="/home">Home</Link></Nav.Link>
      <Nav.Link><Link className="nav-link" to="/orders">Orders</Link></Nav.Link>
      <Nav.Link><Link className="nav-link" to="/admin">Admin</Link></Nav.Link>
      <Nav.Link><Link className="nav-link" to="/">Deals</Link></Nav.Link>
      <Nav.Link><Link className="nav-link" to="/login">Login <span style={{color: 'blue'}}>{loggedInUser.name}</span></Link></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

    );
};

export default Header;