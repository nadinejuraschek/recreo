// COMPONENTS
import Input from 'components/Input';

// STYLED COMPONENTS
import { PlaygroundWrapper } from '../styles/Form';

interface PlaygroundFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const PlaygroundForm: React.FC<PlaygroundFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <PlaygroundWrapper>
      <Input placeholder="Name" type="text" handleChange={setFieldValue} error={errors.name} />
      <Input placeholder="Description" type="textarea" handleChange={setFieldValue} error={errors.description} />
    </PlaygroundWrapper>
  );
};

export default PlaygroundForm;
