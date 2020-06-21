import { Loader } from 'components/Loader'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Container from 'react-bootstrap/Container'

import { JoinClassForm } from 'components/Forms/JoinClassForm'
import { socket, api, setChatData } from 'utils'

export const JoinClass = () => {
  const { id } = useParams()
  const history = useHistory()

  const [loading, setLoading] = useState(false)
  const [room, setRoom] = useState({})

  const handleFormSubmit = async (values, actions) => {
    setLoading(true)

    const {
      name: chatRoomName,
      host: { username: hostName },
      videoUrl,
    } = room

    try {
      const response = await api.createUser(values.name)

      const { data } = response.data
      const { _id: userId } = data

      setChatData(chatRoomName, id, values.name, userId, videoUrl, hostName)

      api.joinRoom(id, userId)

      socket.on('roomJoined', () => {
        // redirect the user to the chatroom
        history.push(`/chatroom/${id}`)
        setLoading(false)
        actions.setSubmitting(false)
      })
    } catch (e) {
      alert(e.message)
    }
  }

  const getRoomData = async () => {
    const roomInfo = await api.getChatRoom(id)
    setRoom(roomInfo.data.data)
  }

  useEffect(() => {
    if (!room.name) {
      getRoomData()
    }
  })

  return room.name ? (
    <Container fluid className="pt--50 pb--50">
      <JoinClassForm
        host={room.host.username}
        className={room.name}
        loading={loading}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  ) : (
    <Loader />
  )
}
