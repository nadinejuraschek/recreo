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

interface FormProps {
  comment?: boolean;
  initialValues: any;
  login?: boolean;
  playground?: boolean;
  register?: boolean;
  validationSchema: any;
}

const Form: React.FC<FormProps> = ({ comment, initialValues, login, playground, register, validationSchema }) => {
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
