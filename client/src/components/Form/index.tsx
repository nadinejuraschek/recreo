// REACT
import { useState } from 'react';

// DEPENDENCIES
import { Formik } from 'formik';

// COMPONENTS
import CommentsForm from './components/Comments';
import LoginForm from './components/Login';
import PlaygroundForm from './components/Playground';
import RegisterForm from './components/Register';

// STYLED COMPONENTS
import { Container } from './styles/Form';

// INTERFACES
import { FormProps } from './types';

const Form = ({
  comment = false,
  initialValues,
  login = false,
  playground = false,
  register = false,
  validationSchema,
}: FormProps): JSX.Element => {
  const [formData, setFormData] = useState({});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setFormData(values);
        console.log('formData: ', formData);
      }}
      render={({ errors, isValid, setFieldValue, values }) => (
        <Container>
          {comment && <CommentsForm errors={errors} isValid={isValid} setFieldValue={setFieldValue} />}
          {login && <LoginForm errors={errors} isValid={isValid} setFieldValue={setFieldValue} />}
          {playground && <PlaygroundForm errors={errors} isValid={isValid} setFieldValue={setFieldValue} />}
          {register && <RegisterForm errors={errors} isValid={isValid} setFieldValue={setFieldValue} />}
        </Container>
      )}
    />
  );
};

export default Form;
