import React, { useState } from 'react'

import { ChatForm } from 'components/Forms/ChatForm'
import { ChatRoomContainer } from 'containers/ChatRoom/styled'

export const ChatRoom = () => {
  const [loading, setLoading] = useState(false)

  const handleMessageSubmit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 15000)
  }

  return (
    <ChatRoomContainer fluid>
      <div className="section-title text-center mb--50">
        <h2 className="title">User&apos;s Class</h2>
      </div>
      <ChatForm loading={loading} handleFormSubmit={handleMessageSubmit} />
    </ChatRoomContainer>
  )
}
