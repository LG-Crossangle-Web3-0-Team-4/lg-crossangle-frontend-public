import { css } from '@emotion/react';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { IconMenu } from './icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavBar({ handleClickNavLink }: { handleClickNavLink: any }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Header>
      <ButtonWrapper>
        <MobileButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconMenu color="#0dc5f5" />
        </MobileButton>
      </ButtonWrapper>
      <MenuWrapper mobileMenuOpen={mobileMenuOpen}>
        <MenuContainer className="">
          <Menu
            onClick={() => {
              handleClickNavLink(0);
              setMobileMenuOpen(false);
            }}
          >
            Welcome
          </Menu>
          <Menu
            onClick={() => {
              handleClickNavLink(1);
              setMobileMenuOpen(false);
            }}
          >
            Story
          </Menu>
          <Menu
            onClick={() => {
              handleClickNavLink(2);
              setMobileMenuOpen(false);
            }}
          >
            Community
          </Menu>
          <Menu
            onClick={() => {
              handleClickNavLink(3);
              setMobileMenuOpen(false);
            }}
          >
            Tokenomics
          </Menu>
          <Menu
            onClick={() => {
              handleClickNavLink(4);
              setMobileMenuOpen(false);
            }}
          >
            RoadMap
          </Menu>
        </MenuContainer>
      </MenuWrapper>
    </Header>
  );
}

export default NavBar;

const Header = tw.header`
flex  items-center z-100
`;
const MenuContainer = tw.div`
flex flex-col gap-8
md:flex-row max-md:absolute max-md:w-100
max-md:top-100 max-md:right-30 
max-md:items-center max-md:justify-center 
font-sb-20



`;

const Menu = styled.div(() => [
  tw`
 md:inline-block md:mt-0  m-2 clickable
 text-black  text-12
 
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

const ButtonWrapper = tw.div`
block md:hidden mr-5 
`;

const MobileButton = tw.button`
flex items-center px-3 py-2 border rounded text-gray-200
  bg-transparent 
  clickable
`;
interface MenuWrapperProps {
  mobileMenuOpen: boolean;
}
const MenuWrapper = styled.div<MenuWrapperProps>(({ mobileMenuOpen }) => [
  tw`flex md:flex`,
  mobileMenuOpen ? tw`flex` : tw`hidden`,
]);
