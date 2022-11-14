import React from 'react';
import { Nav, NavLink, NavMenu } from './NavBar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/feedback">Feedback</NavLink> */}
          <NavLink to="/phonebook">Phonebook</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
