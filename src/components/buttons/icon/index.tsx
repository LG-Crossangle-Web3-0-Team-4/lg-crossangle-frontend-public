import { css } from '@emotion/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import { COLOR } from '~/assets/colors';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export const IconButton = ({ icon, ...rest }: Props) => {
  return <Wrapper {...rest}>{icon}</Wrapper>;
};

const Wrapper = styled.button(() => [
  tw`w-60 h-60 gap-10 p-8  clickable flex-center rounded-30`,
  css`
    background-image: linear-gradient(
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
    svg path {
      fill: ${COLOR.WHITE};
    }
    &:hover {
      svg path {
        fill: ${COLOR.GRAY4};
      }
      box-shadow: 0px 4px 24px 0px #ffd50d40;
    }
  `,
]);
