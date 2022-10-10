import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useScrollPosition } from "../hooks/useScrollPosition";

function Navbar() {
  const [isShrunk, setShrunk] = useState(false);
  const scrollPosition: number = useScrollPosition();

  useEffect(() => scrollPosition > 0 ? setShrunk(true) : setShrunk(false), [scrollPosition])

  return (
    <Nav shrunk={isShrunk}>
      <LogoContainer>
        <Logo src={require('../assets/logo.jpg')} />
        <h1>ASD POLISPORTIVA <br /> MONTANINA</h1>
      </LogoContainer>
      <NavMenuItemContainer>
        <NavMenuItem>
          <NavMenuLink to='team' spy={true} smooth={true} offset={50} duration={500}>Squadra</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          Storia
        </NavMenuItem>
        <NavMenuItem>Kalendarz</NavMenuItem>
      </NavMenuItemContainer>
      <NavNextMatch>
        <Test shrunk={isShrunk}>
          <Logo src={require('../assets/logo.jpg')} />
            Next Match
          <Logo src={require('../assets/logo.jpg')} />
        </Test>
      </NavNextMatch>
    </Nav>
  );
};

interface ITest {
  shrunk: boolean,
}

const Test = styled.div<ITest>`
  opacity: ${props => props.shrunk ? 1 : 0};
  transition: 1s;
`;

interface INav {
  shrunk: boolean,
}

const Nav = styled.nav<INav>`
  border: 3px green solid;
  height: ${props => props.shrunk ? '50px' : '150px'};
  width: 1280px;
  /* max-width: 1280px; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
`;

const LogoContainer = styled.div`
  border: 1px black solid;
  display: flex;
  text-align: center;
  height: 100px;
  flex: 1 0;
`;

const Logo = styled.img`
  height: 100%;
`;

const NavMenuItemContainer = styled.ul`
    border: 1px blue solid;
    display: flex;
    justify-content: space-around;
    flex: 2 0;
`;

const NavMenuItem = styled.li`
  text-decoration: none;
`;

const NavMenuLink = styled(Link)`
  
`;

const NavNextMatch = styled.div`
   border: 1px black solid;
  display: flex;
  text-align: center;
  height: 100px;
  width: 400px;
  flex: 1 0;
  transition: 1s;
`;



export default Navbar;