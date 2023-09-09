import tw, { css, styled } from 'twin.macro';
import { ButtonSmall } from '~/components/buttons/small';

import Header from '~/components/header';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

const rows = [
  {
    id: 1,
    issuer: 'US Treasury 0% 00. 00. 2023',
    cusip: 'US912797GR22',
    maturityDate: '2023-00-00',
    ytm: '5.28%',
    principalAmount: '243,200.00',
    marketValue: '242,533.96',
  },
  {
    id: 2,
    issuer: 'US Treasury 0% 00. 00. 2023',
    cusip: 'US912797GR22',
    maturityDate: '2023-00-00',
    ytm: '5.28%',
    principalAmount: '243,200.00',
    marketValue: '242,533.96',
  },
  {
    id: 3,
    issuer: 'US Treasury 0% 00. 00. 2023',
    cusip: 'US912797GR22',
    maturityDate: '2023-00-00',
    ytm: '5.28%',
    principalAmount: '243,200.00',
    marketValue: '242,533.96',
  },
  {
    id: 4,
    issuer: 'US Treasury 0% 00. 00. 2023',
    cusip: 'US912797GR22',
    maturityDate: '2023-00-00',
    ytm: '5.28%',
    principalAmount: '243,200.00',
    marketValue: '242,533.96',
  },
];

const Mypage = () => {
  const { isConnected, truncatedAddress, disconnect } = useConnectWallet();
  return (
    <>
      <Header />
      <Wrapper>
        <MyPageTitle>MyPage</MyPageTitle>

        <TableWrapper>
          <OrderHeader>
            <HeaderIssuer>Issuer</HeaderIssuer>
            <HeaderCusip>CUSIP</HeaderCusip>
            <HeaderMaturity>Maturity Date</HeaderMaturity>
            <HeaderYtm>YTM</HeaderYtm>
            <HeaderPrincipalAmount>Principal Amount</HeaderPrincipalAmount>
            <HeaderMarketValue>Market Value</HeaderMarketValue>
          </OrderHeader>
          {rows.map(row => (
            <OrderRow key={row.id}>
              <RowIssuer>{row.issuer}</RowIssuer>
              <RowCusip>{row.cusip}</RowCusip>
              <RowMaturity>{row.maturityDate}</RowMaturity>
              <RowYtm>{row.ytm}</RowYtm>
              <RowPrincipalAmount>
                <ButtonSmall
                  text="BUY"
                  onClick={() => {
                    console.log('BUY');
                  }}
                />
              </RowPrincipalAmount>
              <RowMarketValue>{row.marketValue}</RowMarketValue>
            </OrderRow>
          ))}
        </TableWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex flex-col items-center p-80 gap-40 pt-20

`;

const MyPageTitle = tw.div`
  m-auto font-sb-28
`;

const TableWrapper = styled.div(() => [
  tw`flex flex-col w-full gap-20 px-24 py-20 bg-white rounded-20`,
  css`
    box-shadow: 0px 12px 32px 0px #3358ff14;
  `,
]);

const OrderHeader = tw.div`
  w-full flex gap-8
`;

const HeaderIssuer = tw.div`
    font-r-14 w-230 text-gray4 text-center
`;
const HeaderCusip = tw.div`
    font-r-14 w-140 text-gray4 text-center
`;
const HeaderMaturity = tw.div`
    font-r-14 w-100 text-gray4 text-center
`;
const HeaderYtm = tw.div`
    font-r-14 w-80 text-gray4 text-center
`;
const HeaderPrincipalAmount = tw.div`
    font-r-14 w-161 text-gray4 text-center flex-center gap-4
`;
const HeaderMarketValue = tw.div`
    font-r-14 w-161 text-gray4 text-center flex-center gap-4
`;

const OrderRow = tw.div`
  w-full flex gap-8
`;

const RowIssuer = tw.div`
  font-sb-14 w-230 text-black text-center
`;
const RowCusip = tw.div`
  font-r-14 w-140 text-black text-center
`;
const RowMaturity = tw.div`
  font-r-14 w-100 text-black text-center
`;
const RowYtm = tw.div`
  font-r-14 w-80 text-black text-center
`;
const RowPrincipalAmount = tw.div`
  font-r-14 w-161 text-black text-center
`;
const RowMarketValue = tw.div`
  font-r-14 w-161 text-black text-center 
`;

export default Mypage;
