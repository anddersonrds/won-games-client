import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1.3rem ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    background: ${theme.colors.lightGray};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
