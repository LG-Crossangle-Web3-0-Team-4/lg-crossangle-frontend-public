/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { useWeb3Modal } from '@web3modal/react';
import { useEffect, useRef, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { useAccount, useContractRead } from 'wagmi';

import { Tokens_ABI } from '~/abi/tokens';
import { useGetUsersQuery } from '~/api/api-server/users/users-get';
import gifBlue from '~/assets/images/gif-blue.gif';
import gifRed from '~/assets/images/gif-red.gif';
import song2BlueImage from '~/assets/images/song2-blue.jpeg';
import { IconButton } from '~/components/buttons/icon';
import { ButtonSmall } from '~/components/buttons/small';
import Header from '~/components/header';
import { IconDiscord, IconGithub, IconTelegram, IconTwitter } from '~/components/icons';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';
import useScrollFadeIn from '~/hooks/useScrollFadeIn';

const MainPage = () => {
  const { isOpen, open } = useWeb3Modal();
  const { isConnected, truncatedAddress, disconnect } = useConnectWallet();
  const { data } = useGetUsersQuery();
  const { isConnected: wagmiConnected, address: walletAddress } = useAccount();

  const [balance, setBalance] = useState('');

  const navigate = useNavigate();

  return (
    <>
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
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex flex-col items-center p-80 gap-80
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

export default MainPage;
