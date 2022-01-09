import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    top: -0.4rem;
    right: -0.4rem;
    font-size: 1rem;
    border-radius: 50%;
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
  `}
`
