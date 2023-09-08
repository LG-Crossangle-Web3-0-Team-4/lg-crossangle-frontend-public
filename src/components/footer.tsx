import tw from 'twin.macro';

function Footer() {
  return (
    <FooterWrapper>
      <CopyRight>2023 Copyright Owned Global</CopyRight>
      <Link className="hover:text-gray-300">Contact us by email: !!!</Link>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = tw.div`
w-full relative bg-black text-white p-40 flex justify-between items-center
`;
const CopyRight = tw.div`
 font-sb-12 text-center
`;

const Link = tw.div`
font-sb-12 text-center
`;
