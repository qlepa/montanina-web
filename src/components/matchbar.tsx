import React from "react";
import styled from "styled-components";

function MatchBar() {
  return (
    <Container>
      <MatchContainer>
        <Logo src={require('../assets/logo.jpg')} />
            Prev Match
        <Logo src={require('../assets/logo.jpg')} />
      </MatchContainer>
      <MatchContainer>
        <Logo src={require('../assets/logo.jpg')} />
            Next Match
        <Logo src={require('../assets/logo.jpg')} />
      </MatchContainer>
    </Container>
  );
};

const Container = styled.div((props) =>`
  border: 3px green solid;
  background-color: ${props.theme.colors.red};
  max-height: 150px;
  width: 1280px;
  /* max-width: 1280px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`);

const MatchContainer = styled.div`
  border: 1px black solid;
  display: flex;
  text-align: center;
  height: 100px;
  width: 400px;
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

const NavNextMatch = styled.div`
  border: 1px yellow solid;
  flex: 1 0;
`;



export default MatchBar;