// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

interface CommentsFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const CommentsForm: React.FC<CommentsFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <>
      <Input
        placeholder="Tell us about your playground experience..."
        type="textarea"
        handleChange={setFieldValue}
        error={errors.username}
      />
      <Button filled disabled={isValid} type="submit">
        Add Comments
      </Button>
    </>
  );
};

export default CommentsForm;
