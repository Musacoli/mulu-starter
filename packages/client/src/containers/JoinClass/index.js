import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { JoinClassForm } from 'components/Forms/JoinClassForm'

export const JoinClass = () => {
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 15000)
  }

  return (
    <Container fluid className="pt--50 pb--50">
      <JoinClassForm loading={loading} handleFormSubmit={handleFormSubmit} />
    </Container>
  )
}
