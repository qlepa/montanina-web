import styled from 'styled-components';


const StripesBackgroundStyles = styled.div(({ theme }) => `
  background: repeating-linear-gradient(
    -55deg,
    ${theme.colors.white}30,
    ${theme.colors.white}30 40px,
    ${theme.colors.red}30 40px,
    ${theme.colors.red}30 80px
  );
`);

function Banner() {
  return (
    <StripesBackgroundStyles>
      <h1>DALE DALE MONTANINA</h1>
    </StripesBackgroundStyles>
  );
}

export default Banner;