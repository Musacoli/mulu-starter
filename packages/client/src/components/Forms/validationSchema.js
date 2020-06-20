import * as Yup from 'yup'

export const newClassSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  className: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  youTubeUrl: Yup.string().url('Please enter a valid url').required('Required'),
})
