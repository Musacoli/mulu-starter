import React from 'react'
import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'
import Button from 'react-bootstrap/Button'

import { Loader } from 'components/Loader'
import { BaseForm, ErrorText } from 'components/Forms/styled'
import { joinClassSchema } from '../validationSchema'

export const JoinClassForm = (props) => {
  const { handleFormSubmit, loading, host = 'User' } = props

  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={joinClassSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, getFieldProps, handleSubmit, isSubmitting, touched }) => (
        <div className="form-wrapper">
          <div className="section-title text-center mb--50">
            <h2 className="title">{ `Join ${host}'s class` }</h2>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="row row--35 align-items-center justify-content-center">
              <BaseForm onSubmit={handleSubmit}>
                <label className="col-form-label mt-2" htmlFor="name">
                  Your name
                </label>
                <div>
                  <Field required id="name" {...getFieldProps('name')} />
                  <ErrorText className="error">
                    {touched.name && errors.name}
                  </ErrorText>
                </div>

                <Button
                  type="submit"
                  value="submit"
                  name="submit"
                  className="mt-4"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  Join
                </Button>
              </BaseForm>
            </div>
          )}
        </div>
      )}
    </Formik>
  )
}

JoinClassForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}
