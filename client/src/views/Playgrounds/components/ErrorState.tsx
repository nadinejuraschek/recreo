// COMPONENTS
import Button from 'components/Button';
import Title from 'components/Title';

// STYLED COMPONENTS
import { EmptyState, Section } from '../styles/Playgrounds';

// INTERFACES
import { ErrorStateProps } from '../types';

const ErrorState = ({ setOpenAddPlaygroundModal, setShowAllPlaygrounds }: ErrorStateProps): JSX.Element => {
  return (
    <Section>
      <Title>Playgrounds Near You</Title>
      <EmptyState>
        <p>We couldn&apos;t find any playgrounds near you.</p>
        <Button $filled handleClick={() => setOpenAddPlaygroundModal(true)}>
          Add a Playground
        </Button>
        {setShowAllPlaygrounds && (
          <Button $filled handleClick={() => setShowAllPlaygrounds(true)}>
            Browse All Playgrounds
          </Button>
        )}
      </EmptyState>
    </Section>
  );
};

export default ErrorState;
