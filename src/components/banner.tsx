import styled from 'styled-components';

interface IBannerProps {
  bannerHeight?: string;
  theme: any;
}

const StripesBackgroundStyled = styled.div<IBannerProps>((props) =>`
  background: repeating-linear-gradient(
    -55deg,
    ${props.theme.colors.white},
    ${props.theme.colors.white} 80px,
    ${props.theme.colors.red} 80px,
    ${props.theme.colors.red} 160px
  );
  height: ${props.bannerHeight || '5px'};
  display: flex;
  justify-content: center;
  align-items: center;
`);

function Banner() {
  return (
    <StripesBackgroundStyled />
  );
}

export default Banner;