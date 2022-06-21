export interface InputProps {
  error: any;
  label?: string | undefined;
  icon?: string | undefined;
  iconName?: string;
  maxChars?: number;
  name: string;
  placeholder?: string;
  register: any;
  step?: string;
  type?: 'password' | 'number' | 'text' | 'textarea';
}
