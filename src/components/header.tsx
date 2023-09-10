import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import logoImage from '~/assets/images/logo.png';
import song2RedImage from '~/assets/images/song2-red.png';

import NavBar from './navbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header() {
  const dummyImgUrl = 'https://dummyimage.com/400x400/000/fff';
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Image
        onClick={() => {
          navigate('/');
        }}
        src={dummyImgUrl}
        alt="logo"
      />
      <ServiceName>ServiceName</ServiceName>

      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div(() => [
  tw`
flex justify-center items-center p-16
`,
  css``,
]);

const Image = tw.img`
w-96 h-96 m-4 clickable
`;

const ServiceName = tw.div`
m-auto font-extrabold text-4xl max-md:text-2xl
`;

const LogoImg = tw.img`
w-full h-96
`;

export default Header;
