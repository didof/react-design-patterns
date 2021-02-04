import styled from 'styled-components'

export const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

export const FlexX = styled(Flex)`
  flex-direction: row;
`

export const FlexY = styled(Flex)`
  flex-direction: column;
`

export const CenterSingleChild = styled(Flex)`
  justify-content: center;
  align-items: center;
`

export const Row = styled(FlexX)`
  justify-content: space-around;
  align-items: center;
`

export const Column = styled(FlexY)`
  justify-content: space-around;
  align-items: center;
`
