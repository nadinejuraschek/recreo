export interface FormProps {
  comment?: boolean;
  initialValues: any;
  login?: boolean;
  playground?: boolean;
  register?: boolean;
  validationSchema: any;
}

export interface InnerFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
