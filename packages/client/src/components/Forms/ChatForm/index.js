import React from 'react'
import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'

import {
  ChatMessageForm,
  ErrorText,
  SendButton,
  ChatInputGroup,
} from 'components/Forms/styled'
import { chatRoomSchema } from '../validationSchema'

export const ChatForm = (props) => {
  const { handleFormSubmit } = props

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={chatRoomSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, getFieldProps, handleSubmit, isSubmitting, touched }) => (
        <div className="form-wrapper">
          <div className="row row--35 align-items-center justify-content-center">
            <ChatMessageForm onSubmit={handleSubmit}>
              <label hidden className="col-form-label mt-2" htmlFor="message">
                Message
              </label>
              <div className="w-100">
                <ChatInputGroup>
                  <Field
                    required
                    id="message"
                    placeholder="Enter a message..."
                    {...getFieldProps('message')}
                  />
                  <SendButton
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Send
                  </SendButton>
                </ChatInputGroup>
                {touched.message && errors.message && (
                  <ErrorText className="error">{errors.message} </ErrorText>
                )}
              </div>
            </ChatMessageForm>
          </div>
        </div>
      )}
    </Formik>
  )
}

ChatForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
}
