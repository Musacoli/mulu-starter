import { Loader } from 'components/Loader'
import { ShareClass } from 'components/ShareClass'
import { VideoPlayer } from 'components/VideoPlayer'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { animateScroll } from 'react-scroll'

import socket from 'utils/socket'
import api from 'utils/api'
import { ChatForm } from 'components/Forms/ChatForm'
import { Messages } from 'components/Messages'
import { ChatRoomContainer } from 'containers/ChatRoom/styled'

const { getChatRoomMessages } = api

export const ChatRoom = () => {
  const { id } = useParams()

  const [initialized, setInitialized] = useState(false)
  const [chatData] = useState(
    JSON.parse(localStorage.getItem('chatData')) || {},
  )
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const updateScrollPosition = () => {
    animateScroll.scrollToBottom({
      containerId: 'messages',
    })
  }

  const handleMessageSubmit = ({ message }, { resetForm, setSubmitting }) => {
    const { chatRoomId, userId } = chatData

    setLoading(true)

    const data = {
      chatRoomId,
      userId,
      message,
    }

    socket.emit('message', data)

    setLoading(false)
    setSubmitting(false)

    resetForm({ values: { message: '' } })
  }

  const connectToRoom = () => {
    socket.on('connect', () => {
      alert('connected')
    })
    socket.on('newError', () => {
      alert('Error occured, please try again')
    })
    socket.on('newMessage', (data) => {
      debugger
      if (data.chatRoom === id) {
        setMessages((oldMessages) => [...oldMessages, data])
        updateScrollPosition()
      }
    })
    setInitialized(true)
  }

  const getMessages = async () => {
    const response = await getChatRoomMessages(id)
    setMessages(response.data.data)
    updateScrollPosition()
    setInitialized(true)
  }

  const isHost = chatData.hostName === chatData.userName

  useEffect(() => {
    if (!initialized) {
      getMessages()
      connectToRoom()
    }
  })

  return initialized ? (
    <ChatRoomContainer fluid>
      <div className="row mt-1 mb--50">
        <h2 className="col title">{`${chatData.hostName}'s ${chatData.chatRoomName} Class`}</h2>
        {isHost && (
          <ShareClass
            className="col-3"
            url={`${window.location.origin}/join-class/${id}`}
          />
        )}
      </div>
      <VideoPlayer source={chatData.youTubeUrl} />
      <div>
        <Messages messages={messages} />
        <ChatForm loading={loading} handleFormSubmit={handleMessageSubmit} />
      </div>
    </ChatRoomContainer>
  ) : (
    <Loader />
  )
}
