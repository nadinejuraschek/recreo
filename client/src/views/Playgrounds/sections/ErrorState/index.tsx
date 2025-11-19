import { useContext } from 'react';
import { Button, InlineLink, Title } from 'components';
import { EmptyState } from './styles';
import { Section } from '../../styles';
import { UserContext } from 'context/UserContext';
import { ErrorStateProps } from './types';

export const ErrorState = ({ setOpenAddPlaygroundModal, setShowAllPlaygrounds }: ErrorStateProps): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <Section>
      <Title>Playgrounds Near You</Title>
      <EmptyState>
        <p>We couldn&apos;t find any playgrounds near you.</p>
        {user ? (
          <Button onClick={() => setOpenAddPlaygroundModal(true)}>Add a Playground</Button>
        ) : (
          <p>
            <InlineLink to="/login">Login</InlineLink> to add a playground.
          </p>
        )}
        {setShowAllPlaygrounds && <Button onClick={() => setShowAllPlaygrounds(true)}>Browse All Playgrounds</Button>}
      </EmptyState>
    </Section>
  );
};
