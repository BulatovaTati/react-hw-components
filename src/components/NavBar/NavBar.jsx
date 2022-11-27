import React from 'react';
import { Header, NavLink } from './NavBar.styled';

const Navbar = () => {
  return (
    <Header>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/image-finder">Image Finder</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
      </nav>
    </Header>
  );
};

export default Navbar;
