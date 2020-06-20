import { Form } from 'formik'
import styled from 'styled-components'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

export const BaseForm = styled(Form)`
  display: flex;
  flex-flow: column;
  flex-basis: auto;
  flex-grow: inherit;

  input {
    min-width: 300px;
    min-height: 2.3em;
    border-radius: 0;
    border: 2px solid black;
  }

  label {
    color: black;
    font-weight: 500;
  }
`

export const ErrorText = styled.p`
  color: #e97171;
  font-size: small;
`

export const ChatMessageForm = styled(BaseForm)`
  width: 100vw;

  input {
    width: inherit;
    min-height: 2.5em;
  }
`

export const SendButton = styled(Button)`
  border-radius: 0;
  min-width: 5em;
`

export const ChatInputGroup = styled(InputGroup)`
  flex-flow: row;
  margin-bottom: 10px;
`
