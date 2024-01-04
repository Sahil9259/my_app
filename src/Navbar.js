import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #5028A5;
  color: white;
`;
const NavbarLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <Link to="/">Home</Link>
      </NavbarLinks>
      <NavbarLinks>
        <Link to="/bookmark">Bookmark</Link>
      </NavbarLinks>
    </NavbarContainer>
  );
};
export default Navbar;