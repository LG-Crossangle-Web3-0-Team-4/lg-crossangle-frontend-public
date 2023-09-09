/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { useWeb3Modal } from '@web3modal/react';
import { M } from 'msw/lib/glossary-de6278a9';
import { useEffect, useRef, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { useAccount, useContractRead } from 'wagmi';

import { Tokens_ABI } from '~/abi/tokens';
import { useGetUsersQuery } from '~/api/api-server/users/users-get';
import { COLOR } from '~/assets/colors';
import main1 from '~/assets/images/main-1.png';
import main2 from '~/assets/images/main-2.webp';
import { ButtonSmall } from '~/components/buttons/small';
import Header from '~/components/header';
import { IconPlus } from '~/components/icons';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

const MainPage = () => {
  const { isOpen, open } = useWeb3Modal();
  const { isConnected, truncatedAddress, disconnect } = useConnectWallet();
  const { data } = useGetUsersQuery();
  const { isConnected: wagmiConnected, address: walletAddress } = useAccount();

  const [balance, setBalance] = useState('');

  const navigate = useNavigate();

  const [dropdownOpended, setDropdownOpened] = useState(false);

  return (
    <>
      <Header />
      <Wrapper>
        <ConnectWrapper>
          <ConnectTextWrapper>
            <ConnectText>
              {isConnected ? truncatedAddress : 'Connect Your Wallet to get started!!'}
            </ConnectText>
          </ConnectTextWrapper>
          <ButtonSmall
            text={isConnected ? 'disconnect' : 'connect'}
            isLoading={isOpen}
            onClick={isConnected ? () => disconnect() : () => open()}
          />
        </ConnectWrapper>
        <MainContainerFirst>
          <MainContainerFirstImageWrapper>
            <MainContainerFirstImage src={main1} />
          </MainContainerFirstImageWrapper>
          <MainContainerFirstTextWrapper>
            <MainContainerTitle>Service Title</MainContainerTitle>
            <MainContainerDescription>
              Service description Service description Service description Service description
              Service description Service description Service description Service description
              Service description
            </MainContainerDescription>
          </MainContainerFirstTextWrapper>
        </MainContainerFirst>

        <MainContainerSecond>
          <MainContainerSecondTextWrapper>
            <MainContainerTitle>Service Title</MainContainerTitle>
            <MainContainerDescription>
              Service description Service description Service description Service description
              Service description Service description Service description Service description
              Service description
            </MainContainerDescription>
          </MainContainerSecondTextWrapper>
          <MainContainerSecondImageWrapper>
            <MainContainerSecondImage src={main2} />
          </MainContainerSecondImageWrapper>
        </MainContainerSecond>

        <MainContainerThird>
          <SelectBox>
            <SelectTitle>Service Title</SelectTitle>
            <StyledSelectBolder>
              <StyledSelect>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
              </StyledSelect>
            </StyledSelectBolder>
          </SelectBox>
          <UploadBox>
            <UploadTitle>Upload Your File</UploadTitle>

            <UploadDragBox>
              <IconPlus />
              Drag & Drop your Portfolio File
            </UploadDragBox>
          </UploadBox>
        </MainContainerThird>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex flex-col items-center p-80 gap-80 pt-20
 max-md:flex-center`;

const ConnectWrapper = tw.div`
  flex items-center gap-32 max-md:flex-col
  
`;

const ConnectTextWrapper = styled.div(() => [
  tw`
  flex flex-col
  font-sb-28 
  drop-shadow-2xl
  bg-transparent
  gap-16
  max-md:font-sb-12
  text-black
`,
  css``,
]);

const ConnectText = tw.div`
 font-extrabold text-2xl text-black max-md:font-sb-12
`;

const MainContainerFirst = tw.div`
  flex items-center gap-32 
`;

const MainContainerFirstImageWrapper = tw.div`
  flex flex-col items-center gap-32 max-md:flex-center
`;

const MainContainerFirstImage = tw.img`
  w-300 m-4
`;

const MainContainerFirstTextWrapper = tw.div`
  flex flex-col items-center gap-32 max-md:flex-center
`;

const MainContainerTitle = tw.div`
  m-auto font-sb-28
`;

const MainContainerDescription = tw.div`
  m-auto w-400 font-sb-20
`;

const MainContainerSecond = tw.div`
  flex items-center gap-32 
`;

const MainContainerSecondTextWrapper = tw.div`
  flex flex-col items-center gap-32 max-md:flex-center
`;

const MainContainerSecondImageWrapper = tw.div`
  flex flex-col items-center gap-32 max-md:flex-center
`;

const MainContainerSecondImage = tw.img`
  w-300 m-4
`;

const MainContainerThird = tw.div`
  flex items-center gap-32 
`;

const SelectBox = tw.div`
  flex items-center gap-32 
`;

const SelectTitle = tw.div`
  m-auto font-sb-28
`;

const StyledSelectBolder = tw.div`
  flex w-full border-solid border-2 border-black rounded-8
`;

const StyledSelect = tw.select`
  m-auto font-sb-20 border-none
`;

const UploadBox = tw.div`
  flex items-center gap-32 
`;

const UploadTitle = tw.div`
  m-auto font-sb-28
`;

const UploadDragBox = tw.div`
  flex-center flex-col items-center gap-16 bg-gray1 w-250 h-250 rounded-8
  border-dashed border-2 border-black
`;

export default MainPage;
