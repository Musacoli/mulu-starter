import { Form } from 'formik'
import styled from 'styled-components'

export const CreateForm = styled(Form)`
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
