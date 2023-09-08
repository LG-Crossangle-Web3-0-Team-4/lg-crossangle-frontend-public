import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

import logoImage from '~/assets/images/logo.png';
import song2RedImage from '~/assets/images/song2-red.png';

import NavBar from './navbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({ handleClickNavLink }: { handleClickNavLink: any }) {
  return (
    <Wrapper>
      <Image src={song2RedImage} alt="logo" />
      <ServiceName>
        <LogoImg src={logoImage} alt="logo" />
      </ServiceName>

      <NavBar handleClickNavLink={handleClickNavLink} />
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`
flex justify-center items-center p-16
`,
  css`
    background-image: linear-gradient(
      89.57deg,
      #0dc5f5 -5.62%,
      #b6f2ff 12.9%,
      #71ddf1 20.67%,
      #48ceff 31.64%,
      #61d7f6 40.11%,
      #a8e9ff 52.12%,
      #60d2ff 59.37%,
      #a0e2ff 67.72%,
      #96e0ff 77.39%,
      #a4e7ff 87.84%,
      #5dd6f8 97.98%,
      #28a2d8 109.11%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
]);

const Image = tw.img`
w-96 h-96 m-4
`;

const ServiceName = tw.div`
m-auto font-extrabold text-4xl max-md:text-2xl
`;

const LogoImg = tw.img`
w-full h-96
`;

export default Header;
