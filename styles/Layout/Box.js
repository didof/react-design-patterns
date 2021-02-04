import styled from 'styled-components'

export const Box = styled.div`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ padding }) => (padding ? `${padding}px` : 'inherit')};
  margin: ${({ margin }) => (margin ? `${margin}px` : 'auto')};
  background-color: grey;
`
