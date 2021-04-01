// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

// STYLED COMPONENTS
import { ButtonWrapper, Rating } from '../styles/Form';

interface CommentsFormProps {
  errors: any;
  isValid: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const CommentsForm: React.FC<CommentsFormProps> = ({ errors, isValid, setFieldValue }) => {
  return (
    <>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Input
        placeholder="Tell us about your playground experience..."
        type="textarea"
        handleChange={setFieldValue}
        error={errors.username}
      />
      <ButtonWrapper>
        <Button disabled={isValid} filled small type="submit">
          Add Comment
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default CommentsForm;
