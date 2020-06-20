import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { CreateClassForm } from 'components/Forms/CreateClassForm'

export const CreateClass = () => {
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 15000)
  }

  return (
    <Container fluid className="pt--50 pb--50">
      <CreateClassForm loading={loading} handleFormSubmit={handleFormSubmit} />
    </Container>
  )
}
