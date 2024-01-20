import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #5028A5;
  color: white;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 16px;
  margin: 0rem 3rem;
  margin-top: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bold; 
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <StyledNavLink to="/" activeclassname="active">Home</StyledNavLink>
      </NavbarLinks>
      <NavbarLinks>
        <StyledNavLink to="/bookmark" activeclassname="active">Bookmark</StyledNavLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
