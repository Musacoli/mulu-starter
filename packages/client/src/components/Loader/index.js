import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { LoaderContainer } from './styled'

export const Loader = () => (
  <LoaderContainer fluid>
    <Spinner animation="grow" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </LoaderContainer>
)
