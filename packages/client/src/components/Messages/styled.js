import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export const MessageContainer = styled(Container)`
  width: 100vw;
  margin: 10px 0;
  height: calc(50vh - 150px);
  overflow-y: scroll;
`

export const Message = styled.p`
  font-size: small;
`

export const MessageUser = styled.span`
  font-weight: 600;
  font-size: small;
`

export const MessageTimeStamp = styled.span`
  font-weight: 600;
  font-size: small;
  opacity: 0.7;
`

export const MessageBody = styled.div`
  padding: 0;
`
