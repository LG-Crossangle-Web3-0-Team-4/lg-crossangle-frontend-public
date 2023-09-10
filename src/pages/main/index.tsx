/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { useWeb3Modal } from '@web3modal/react';
import { useEffect, useRef, useState } from 'react';
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

  const Ref = useRef<any>();

  const [uploadFile, setUploadFile] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any | null>(null);

  const FileUpload = (e: any, data: any) => {
    e.preventDefault();
    setUploadFile(true);
    setSelectedFile(data.files[0]);
  };

  useEffect(() => {
    if (!Ref) return;
    Ref.current.addEventListener('dragover', (e: any) => e.preventDefault());

    Ref.current.addEventListener('drop', (e: any) => FileUpload(e, e.dataTransfer));
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <ConnectWrapper>
          <ConnectTextWrapper>
            <ConnectText>
              {isConnected ? truncatedAddress : '지갑을 연동하여 시작하세요!!'}
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
            <MainContainerTitle>전문가 플랫폼 인증 B2B 서비스</MainContainerTitle>
            <MainContainerDescription>
              증빙 자료를 제출하여 인증 후에 SBT를 인증 수단으로 발행하여 증빙 자료가 인증되면, 해당
              증빙 자료와 관련된 스마트 계약 토큰(SBT)이 발행됩니다.
              <br />이 SBT는 해당 거래 또는 계약의 중요한 세부 정보를 포함하고 있으며, 블록체인에
              기록됩니다.
            </MainContainerDescription>
          </MainContainerFirstTextWrapper>
        </MainContainerFirst>

        <MainContainerSecond>
          <MainContainerSecondTextWrapper>
            <MainContainerTitle>B2B 서비스 및 API 제공</MainContainerTitle>
            <MainContainerDescription>
              발행된 SBT는 B2B 서비스를 통해 다른 기업 및 전문가 플랫폼과 공유됩니다.
              <br />
              API를 통해 다른 시스템과 통합할 수 있으며, 실시간 업데이트와 정보 공유를 지원합니다.
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

            {selectedFile ? (
              <div>
                <Filename>{selectedFile ? selectedFile.name : 'No file selected'}</Filename>
              </div>
            ) : (
              <UploadDragBox ref={Ref}>
                <IconPlus />
                Drag & Drop your Portfolio File
              </UploadDragBox>
            )}
          </UploadBox>
          {selectedFile && (
            <ButtonSmall
              text="제출"
              onClick={() => {
                navigate('/mypage');
              }}
            />
          )}
        </MainContainerThird>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex flex-col items-center p-80 gap-80 pt-20
 max-md:flex-center
`;

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
  flex-center m-auto w-450 font-sb-20 break-keep
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
  flex flex-col items-center gap-32 
`;

const SelectBox = tw.div`
  flex items-center gap-32 
`;

const SelectTitle = tw.div`
  m-auto font-sb-28 w-300
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
  flex-center flex-col items-center gap-16 bg-blue w-250 h-250 rounded-8
  border-dashed border-2 border-black
`;

const Filename = tw.div`
  m-auto font-sb-20
`;

export default MainPage;
