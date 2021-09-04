// COMPONENTS
import Button from 'components/Button';
import Input from 'components/Input';

// STYLED COMPONENTS
import { ButtonWrapper, Rating } from '../styles/Form';

// INTERFACES
import { InnerFormProps } from '../types';

const CommentsForm = ({ errors, isValid, setFieldValue }: InnerFormProps): JSX.Element => {
  return (
    <>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Input placeholder="Tell us about your playground experience..." type="textarea" handleChange={setFieldValue} error={errors?.text} />
      <ButtonWrapper>
        <Button disabled={isValid} filled small type="submit">
          Add Comment
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default CommentsForm;
