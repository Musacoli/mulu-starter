import { CreateClassForm } from 'components/Forms/CreateClassForm'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router'
import { api, socket, setChatData } from 'utils'

const { createRoom, joinRoom } = api

export const CreateClass = () => {
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleFormSubmit = async (values, actions) => {
    const { name, className, youTubeUrl } = values
    // set  loading to true to initiate loading indicator
    setLoading(true)

    try {
      const newRoom = await createRoom(className, name, youTubeUrl)

      const chatRoomId = newRoom.data.data._id
      const userId = newRoom.data.data.host

      // save ChatRoomData to localStorage upon successful creation
      setChatData(className, chatRoomId, name, userId, youTubeUrl, name)

      // emit a join room event after the room has been created
      joinRoom(chatRoomId, userId)

      socket.on('roomJoined', () => {
        // redirect the user to the chatroom
        history.push(`/chatroom/${chatRoomId}`)
        setLoading(false)
        actions.setSubmitting(false)
      })
    } catch (e) {
      alert('Error')
    }
  }

  return (
    <Container fluid className="pt--50 pb--50">
      <CreateClassForm loading={loading} handleFormSubmit={handleFormSubmit} />
    </Container>
  )
}
