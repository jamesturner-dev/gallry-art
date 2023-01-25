// create and exportable function to validate fporm data from registration

export const validateRegistration = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.password2) {
    errors.password2 = 'Confirm password is required';
  }

  if (values.password !== values.password2) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
}


