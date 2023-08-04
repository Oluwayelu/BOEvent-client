import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object({
  lastname: yup.string().required('Lastname is requied'),
  firstname: yup.string().required('Firstname is requied'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password required'),
});

export const eventSchema = yup.object({
  title: yup.string().required('Event title is required'),
  summary: yup.string().required('Summary is required'),
  description: yup.string().required('Description is required'),
  eventType: yup.string(),
  location: yup.string().required('Location is required'),
  startDate: yup.string().required('Start date is required'),
  startTime: yup.string().required('Start time is required'),
  endDate: yup.string().required('End date is required'),
  endTime: yup.string().required('End time is required'),
  price: yup.number(),
  banner: yup.array().required('Event banner can not be empty'),
});
