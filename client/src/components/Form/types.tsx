export interface FormProps {
  comment?: boolean;
  initialValues: any;
  login?: boolean;
  playground?: boolean;
  register?: boolean;
  validationSchema: any;
}

export interface CommentsFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export interface LoginFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export interface PlaygroundFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export interface RegisterFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
