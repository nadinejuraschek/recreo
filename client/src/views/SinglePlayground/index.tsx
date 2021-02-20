// STYLED COMPONENTS
import { Amenities, BackButton, Info, Preview, Section } from './styles/SinglePlayground';

// LAYOUT
import MapLayout from 'layouts/MapLayout';

// COMPONENTS

const SinglePlayground = () => {
  return (
    <MapLayout>
      <BackButton>Back</BackButton>
      <Section>
        <Amenities>Amenities</Amenities>
        <Info>
          <p>Name</p>
          <p>Location, Distance</p>
          <p>Description</p>
          <p>Favorite</p>
          <p>Forward</p>
          <p>Review Average</p>
          <p>Reviews / Commentaries</p>
        </Info>
      </Section>
      <Preview>Images</Preview>
    </MapLayout>
  );
};

export default SinglePlayground;
