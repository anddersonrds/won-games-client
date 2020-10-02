import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-top: ${theme.spacings.small};

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        margin: 0 ${theme.spacings.xxsmall};
        background: ${theme.colors.white};

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        flex-direction: column;
        height: 100%;
        right: 0;
        top: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`;
