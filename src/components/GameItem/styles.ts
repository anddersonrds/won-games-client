import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const GameContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 15rem;
      height: 7rem;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: 2rem;
      line-height: 2rem;
    `}
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    padding: 0.2rem ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
  `}
`

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.gray};

    ${media.greaterThan('medium')`
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 0;
    `}
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`
