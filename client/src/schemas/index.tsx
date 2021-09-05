// DEPENDENCIES
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please choose a username.'),
  password: Yup.string()
    .min(6, 'Password has to be at least 6 characters long.')
    .max(30, 'Password can not exceed 30 characters.')
    .required('Password is required.'),
});
