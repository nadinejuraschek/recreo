export interface InputProps {
  error: any;
  label?: string | undefined;
  icon?: string | undefined;
  iconName?: string;
  maxChars?: number;
  name: string;
  placeholder?: string;
  register: any;
  required?: boolean;
  step?: string;
  type?: 'password' | 'number' | 'text' | 'textarea';
}

export interface StyledInputProps {
  withIcon: boolean;
}
