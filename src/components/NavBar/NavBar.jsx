import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Feedback">Feedback</NavLink>
          <NavLink to="/Phonebook">Phonebook</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
