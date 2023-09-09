import tw from 'twin.macro';

import Header from '~/components/header';
import { useConnectWallet } from '~/hooks/data/use-connect-wallet';

const Mypage = () => {
  const { isConnected, truncatedAddress, disconnect } = useConnectWallet();
  return (
    <>
      <Header />
      <Wrapper></Wrapper>
    </>
  );
};

const Wrapper = tw.div`
 flex flex-col items-center p-80 gap-80 pt-20

`;

export default Mypage;
