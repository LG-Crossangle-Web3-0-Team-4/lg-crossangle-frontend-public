import { css } from '@emotion/react';
import lottie from 'lottie-web/build/player/lottie_light';
import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';

import loading from '~/assets/lottie/loading-dot.json';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}
export const ButtonSmall = ({ text, isLoading, ...rest }: Props) => {
  const warpperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!warpperRef.current || !isLoading) return;
    lottie.loadAnimation({
      container: warpperRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loading,
    });

    return () => {
      lottie.destroy();
    };
  }, [warpperRef, isLoading]);

  return (
    <Wrapper isLoading={isLoading} {...rest}>
      <TextWrapper isLoading={isLoading}>{text}</TextWrapper>
      <LottieWrapper ref={warpperRef} />
    </Wrapper>
  );
};

interface LoadingProps {
  isLoading?: boolean;
}
const Wrapper = styled.button<LoadingProps>(({ isLoading }) => [
  tw`
    w-200 h-64 px-16 py-6 flex-center relative
    rounded-8 bg-gray4 clickable
    disabled:(bg-gray2 non-clickable hover:(bg-gray2))
  `,
  css`
    min-width: 160px;
    background: linear-gradient(
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
  `,
  isLoading && tw`text-transparent non-clickable`,
]);

const TextWrapper = styled.div<LoadingProps>(({ isLoading }) => [
  tw`
    font-sb-20 text-white
    disabled:(text-gray5)
    hover:(text-black)
    max-md:font-sb-12
  `,
  isLoading && tw`opacity-0`,
]);
const LottieWrapper = tw.div`
  w-full h-full flex-center absolute absolute-center
`;
