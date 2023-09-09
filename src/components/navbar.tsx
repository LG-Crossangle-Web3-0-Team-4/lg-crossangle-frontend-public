import { css } from '@emotion/react';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { IconMenu } from './icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dummyImgUrl = 'https://dummyimage.com/600x400/000/fff';
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
              setMobileMenuOpen(false);
            }}
          >
            MyPage
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
 text-black font-sb-20
 max-md:text-12
`,
  css``,
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
