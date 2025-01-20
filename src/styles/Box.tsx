import styled, { css } from 'styled-components'

type BoxProps = {
  w?: string | number
  h?: string | number
  p?: string
  pl?: string
  pr?: string
  pb?: string
  pt?: string
  m?: string
  mt?: string
  mb?: string
  ml?: string
  mr?: string
  fontSize?: string | number
  fontWeight?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  display?: string
  background?: string
  borderRadius?: string
  borderTLRadius?: string
  borderTRRadius?: string
  borderBLRadius?: string
  borderBRRadius?: string
  border?: string
  borderRight?: string
  borderBottom?: string
  borderTop?: string
  opacity?: number
  filter?: string
  zIndex?: string
  textAlign?: string
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  overflow?: string
  overflowX?: string
  overflowY?: string
  textOverflow?: string
  flexGrow?: string
  boxShadow?: string
  whiteSpace?: string
  transform?: string
  backgroundHover?: string
  transition?: string
  cursor?: string
  userSelect?: string
  color?: string
}

export const Box = styled.div<BoxProps>`
  ${props => css`
    display: ${props.display};
    color: ${props.color};
    width: ${props.w};
    height: ${props.h};
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    min-height: ${props.minHeight};
    max-height: ${props.maxHeight};
    min-width: ${props.minWidth};
    max-width: ${props.maxWidth};
    padding: ${props.p};
    padding-left: ${props.pl};
    padding-right: ${props.pr};
    padding-bottom: ${props.pb};
    padding-top: ${props.pt};
    margin: ${props.m};
    margin-top: ${props.mt};
    margin-bottom: ${props.mb};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    background: ${props.background};
    border-radius: ${props.borderRadius};
    border-top-left-radius: ${props.borderTLRadius};
    border-top-right-radius: ${props.borderTRRadius};
    border-bottom-left-radius: ${props.borderBLRadius};
    border-bottom-right-radius: ${props.borderBRRadius};
    opacity: ${props.opacity};
    position: ${props.position};
    top: ${props.top};
    border: ${props.border};
    border-right: ${props.borderRight};
    filter: ${props.filter};
    border-bottom: ${props.borderBottom};
    border-top: ${props.borderTop};
    z-index: ${props.zIndex};
    text-align: ${props.textAlign};
    left: ${props.left};
    right: ${props.right};
    bottom: ${props.bottom};
    overflow: ${props.overflow};
    overflow-x: ${props.overflowX};
    overflow-y: ${props.overflowY};
    flex-grow: ${props.flexGrow};
    box-shadow: ${props.boxShadow};
    text-overflow: ${props.textOverflow};
    white-space: ${props.whiteSpace};
    cursor: ${props.cursor};
    user-select: ${props.userSelect};
    transform: ${props.transform};
    transition: ${props.transition};
    ${props.backgroundHover ? `
    :hover {
      background: ${props.backgroundHover};
    }
    ` : ''}
  `}
`

type FlexProps = {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'inherit' | 'baseline'
  justifyContent?: 'center' | 'space-between' | 'flex-end'
  gap?: string | number
  flexDirection?: 'column' | 'row'
  flexWrap?: string
}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  align-items: center;

  ${props => css`
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    gap: ${props.gap};
    flex-direction: ${props.flexDirection};
    flex-wrap: ${props.flexWrap};
  `}
`

type GridProps = {
  columns?: string
  gap?: string | number
}

export const Grid = styled(Flex)<GridProps>`
  display: grid;

  ${props => css`
    grid-template-columns: ${props.columns};
    gap: ${props.gap};
  `}
`
