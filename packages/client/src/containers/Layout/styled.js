import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const LayoutContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`

export const Content = styled(LayoutContainer)`
  display: flex;
  min-height: calc(100vh - 56px);
  min-width: 100vw;
  align-items: center;
  justify-content: center;
`
