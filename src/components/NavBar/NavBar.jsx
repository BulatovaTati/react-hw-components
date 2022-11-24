import React from 'react';
import { Header, NavLink } from './NavBar.styled';

const Navbar = () => {
  return (
    <Header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
      </nav>
    </Header>
  );
};

export default Navbar;
