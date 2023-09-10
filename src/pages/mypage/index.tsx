/* eslint-disable react-hooks/rules-of-hooks */
import tw, { css, styled } from 'twin.macro';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Tokens_ABI } from '~/abi/tokens';
import Header from '~/components/header';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

const rows = [
  {
    date: '2021.08.01',
    category: 'Designer',
    status: '승인 대기',
  },
  {
    date: '2021.08.02',
    category: 'Designer',
    status: '승인 완료',
  },
  {
    date: '2021.08.03',
    category: 'Designer',
    status: '승인 거절',
  },
];

const Mypage = () => {
  const { isConnected, truncatedAddress, disconnect } = useConnectWallet();

  // const mintSbt = ()=>{

  //   const {address : walletAddress} = useAccount();

  //   const {config} = usePrepareContractWrite({
  //     address : "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  //     abi : Tokens_ABI,
  //     functionName : "mint",
  //     chainId : 31337,
  //     account : walletAddress,
  //     args : [walletAddress, 1000],
  //   });

  //   const {data, writeAsync} =useContractWrite(config);

  // }

  return (
    <>
      <Header />
      <Wrapper>
        <TableWrapper>
          <OrderHeader>
            <HeaderIssuer>발급 신청일</HeaderIssuer>
            <HeaderCusip>카테고리</HeaderCusip>
            <HeaderPrincipalAmount>승인 상태</HeaderPrincipalAmount>
          </OrderHeader>
          {rows.map(row => (
            <OrderRow key={row.date}>
              <RowIssuer>{row.date}</RowIssuer>
              <RowCusip>{row.category}</RowCusip>

              <RowPrincipalAmount>
                <ButtonMyPage
                  status={row.status}
                  onClick={() => {
                    console.log('click');
                  }}
                >
                  {row.status}
                </ButtonMyPage>
              </RowPrincipalAmount>
            </OrderRow>
          ))}
        </TableWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex-center flex-col items-center p-80 gap-40 pt-20
`;

const MyPageTitle = tw.div`
  m-auto font-sb-28
`;

const TableWrapper = styled.div(() => [
  tw`flex flex-col gap-20 px-24 py-20 bg-white rounded-20`,
  css`
    box-shadow: 0px 12px 32px 0px #3358ff14;
  `,
]);

const OrderHeader = tw.div`
   m-auto flex gap-8
`;

const HeaderIssuer = tw.div`
    font-r-14 w-230 text-gray4 text-center
`;
const HeaderCusip = tw.div`
    font-r-14 w-140 text-gray4 text-center
`;

const HeaderPrincipalAmount = tw.div`
    font-r-14 w-161 text-gray4 text-center flex-center gap-4
`;

const OrderRow = tw.div`
  m-auto flex gap-8
`;

const RowIssuer = tw.div`
  flex-center font-sb-14 w-230 text-black text-center
`;
const RowCusip = tw.div`
  flex-center font-r-14 w-140 text-black text-center
`;

const RowPrincipalAmount = tw.div`
  font-r-14 w-161 text-black text-center flex-center
`;

interface ButtonMyPageProps {
  status: string;
}
const ButtonMyPage = styled.button(({ status }: ButtonMyPageProps) => [
  tw` flex-center w-100 h-30 bg-blue rounded-10 text-white text-center font-sb-14
  
  `,
  status === '승인 대기' && tw`bg-blue`,
  status === '승인 완료' && tw`bg-green-300 clickable`,
  status === '승인 거절' && tw`bg-red-300`,
]);

export default Mypage;
