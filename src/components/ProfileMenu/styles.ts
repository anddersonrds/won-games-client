import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background: ${theme.colors.white};
  `,

  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      flex: 1;
      justify-content: center;

      > span {
        display: none;
      }
    `}

    ${!isActive && linkModifiers.default(theme)}
    ${isActive && linkModifiers.active(theme)}
  `}
`
