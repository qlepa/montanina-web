import React from "react";
import styled from "styled-components";

function Navbar() {
  return(
    <Nav>
      <NavLogo src={require('../assets/logo.jpg')}></NavLogo>
      <NavMenuItem>Squadra</NavMenuItem>
      <NavMenuItem>Storia</NavMenuItem>
      <NavMenuItem>Kalendarz</NavMenuItem>
    </Nav>
  );
};

const Nav = styled.nav`
  
`;

const NavLogo = styled.img`
  
`;

const NavMenuItem = styled.a`
  
`;



export default Navbar;