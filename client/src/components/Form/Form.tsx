// REACT
import { useState } from 'react';

// DEPENDENCIES
import { Formik } from 'formik';

// COMPONENTS
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

// STYLED COMPONENTS
import { Container } from './styles/Form';

interface FormProps {
  initialValues: any;
  validationSchema: any;
}

const Form: React.FC<FormProps> = ({ initialValues, validationSchema }) => {
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
          <Input placeholder="Username" type="text" icon handleChange={setFieldValue} error={errors.username} />
          <Input placeholder="Password" type="password" icon handleChange={setFieldValue} error={errors.password} />
          <Button filled fullWidth disabled={isValid} type="submit">
            Login
          </Button>
        </Container>
      )}
    />
  );
};

export default Form;
