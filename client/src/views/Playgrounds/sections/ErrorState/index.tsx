// DEPENDENCIES
import { useContext } from 'react';

// COMPONENTS
import { Button, InlineLink, Title } from 'components';

// STYLED COMPONENTS
import { EmptyState, Section } from '../../styles/Playgrounds';

// CONTEXT
import { UserContext } from 'context/UserContext';

// INTERFACES
import { ErrorStateProps } from '../../types';

export const ErrorState = ({ setOpenAddPlaygroundModal, setShowAllPlaygrounds }: ErrorStateProps): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <Section>
      <Title>Playgrounds Near You</Title>
      <EmptyState>
        <p>We couldn&apos;t find any playgrounds near you.</p>
        {user ? (
          <Button $filled handleClick={() => setOpenAddPlaygroundModal(true)}>
            Add a Playground
          </Button>
        ) : (
          <p>
            <InlineLink to="/login">Login</InlineLink> to add a playground.
          </p>
        )}
        {setShowAllPlaygrounds && (
          <Button $filled handleClick={() => setShowAllPlaygrounds(true)}>
            Browse All Playgrounds
          </Button>
        )}
      </EmptyState>
    </Section>
  );
};
