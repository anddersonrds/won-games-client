import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
    background: ${tint(0.2, theme.colors.lightGray)};

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

const ItemStyles = (theme: DefaultTheme) => css`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 ${theme.spacings.xxsmall};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  background: ${theme.colors.lightGray};
  cursor: pointer;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    justify-content: space-between;
    ${ItemStyles(theme)};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`
