import React from 'react'
import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'
import Button from 'react-bootstrap/Button'

import { Loader } from 'components/Loader'
import { newClassSchema } from '../validationSchema'
import { CreateForm, ErrorText } from './styled'

export const CreateClassForm = (props) => {
  const { handleFormSubmit, loading } = props

  return (
    <Formik
      initialValues={{
        name: '',
        className: '',
        youTubeUrl: '',
      }}
      validationSchema={newClassSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, getFieldProps, handleSubmit, isSubmitting, touched }) => (
        <div className="form-wrapper">
          <div className="section-title text-center mb--50">
            <h2 className="title">Start a class</h2>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="row row--35 align-items-center justify-content-center">
              <CreateForm onSubmit={handleSubmit}>
                <label className="col-form-label mt-2" htmlFor="name">
                  Your name
                </label>
                <div>
                  <Field required id="name" {...getFieldProps('name')} />
                  <ErrorText className="error">
                    {touched.name && errors.name}
                  </ErrorText>
                </div>

                <label className="col-form-label mt-2" htmlFor="className">
                  Class name
                </label>
                <div>
                  <Field
                    required
                    id="className"
                    {...getFieldProps('className')}
                  />
                  <ErrorText className="error">
                    {touched.className && errors.className}
                  </ErrorText>
                </div>

                <label className="col-form-label mt-2" htmlFor="youTubeUrl">
                  YouTube URL
                </label>
                <div>
                  <Field
                    required
                    id="youTubeUrl"
                    {...getFieldProps('youTubeUrl')}
                  />
                  <ErrorText className="error">
                    {touched.youTubeUrl && errors.youTubeUrl}
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
                  Start
                </Button>
              </CreateForm>
            </div>
          )}
        </div>
      )}
    </Formik>
  )
}

CreateClassForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}
