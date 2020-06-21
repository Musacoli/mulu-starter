import React from 'react'
import PropTypes from 'prop-types'

import {
  MessageContainer,
  MessageUser,
  Message,
  MessageTimeStamp,
  MessageBody,
} from 'components/Messages/styled'
import { Loader } from 'components/Loader'
import { getUserTimezone, localizeTimeStamp } from 'utils'

export const Messages = (props) => {
  const { messages } = props

  const userTimezone = getUserTimezone()

  return messages ? (
    <MessageContainer id="messages" fluid>
      {messages.map((m) => (
        <MessageBody className="col-12" key={m._id}>
          <div className="row">
            <div className="col">
              <MessageUser>{m.user.username}</MessageUser>
              <Message>{m.message}</Message>
            </div>
            <div className="col-3 text-right">
              <MessageTimeStamp>
                {localizeTimeStamp(m.createdAt, userTimezone)}
              </MessageTimeStamp>
            </div>
          </div>
        </MessageBody>
      ))}
    </MessageContainer>
  ) : (
    <Loader />
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      message: PropTypes.string,
      user: PropTypes.shape({
        username: PropTypes.string,
      }),
      createdAt: PropTypes.date,
    }),
  ),
}
