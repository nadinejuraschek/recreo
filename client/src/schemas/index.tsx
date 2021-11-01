// DEPENDENCIES
import * as Yup from 'yup';

const features = [
  'basketball',
  'climbingWall',
  'drinkingFountain',
  'grass',
  'monkeyBars',
  'restrooms',
  'sandbox',
  'seating',
  'slide',
  'soccer',
  'sprinklers',
  'sunProtection',
  'swingset',
  'toddlerSafe',
];

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username has to be at least 3 characters long.')
    .max(30, 'Username can not exceed 30 characters.')
    .required('Please choose a username.'),
  password: Yup.string()
    .min(6, 'Password has to be at least 6 characters long.')
    .max(30, 'Password can not exceed 30 characters.')
    .required('Password is required.'),
});

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username has to be at least 3 characters long.')
    .max(30, 'Username can not exceed 30 characters.')
    .required('Please choose a username.'),
  password: Yup.string()
    .min(6, 'Password has to be at least 6 characters long.')
    .max(30, 'Password can not exceed 30 characters.')
    .required('Password is required.'),
});

export const playgroundSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name has to be at least 3 characters long.')
    .max(50, 'Name can not exceed 50 characters.')
    .required("Please enter the playground's name."),
  location: Yup.string().required("Please enter the playground's location."),
  // lat: Yup.number(),
  // long: Yup.number(),
  description: Yup.string().max(120, 'Description can not exceed 120 characters.').required('Description can not be empty.'),
  features: Yup.array().of(Yup.string().oneOf(features)),
});

export const commentSchema = Yup.object().shape({
  text: Yup.string().max(600, 'Review can not exceed 600 characters.').required('Review can not be empty.'),
});
