// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/bookmark">Bookmark</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
export const Nav = styled.nav`
    height: 2 rem;
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    align-items: center;
    ul, li {
      list-style: none;
    }
    .cont{
      display: flex;
      flex-direction: row;
      align-items: center;     
    }
    li{
      colour: white;
    }

`;
