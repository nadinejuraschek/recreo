import { useState } from 'react';
import { Content, TabContent } from './styles';
import { AmenitiesList } from 'components';
import { Comments, ErrorState, Header, Info, Preview } from './sections';
import { LoadingSpinner, Tabs } from 'components';
import { useQuery } from '@tanstack/react-query';
import { getSinglePlayground } from 'api';
import { useParams } from 'react-router-dom';

export const SinglePlayground = (): JSX.Element => {
  const { id: paramId = '' } = useParams<{ id: string }>();

  const tabOptions = [
    { label: 'Images', name: 'images' },
    { label: 'Features', name: 'features' },
    { label: 'Reviews', name: 'reviews' },
  ];
  const [activeTab, setActiveTab] = useState<string>(tabOptions[0].name);

  const {
    data: playground,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['playground'],
    queryFn: () => getSinglePlayground(paramId),
  });

  if (isLoading) {
    return <LoadingSpinner containerHeight="100%" containerWidth="100%" />;
  }

  if (error || !playground) {
    return <ErrorState />;
  }

  const { description, features, location, images, rating, reviews, title, _id } = playground;

  return (
    <Content>
      <Header id={_id} name={title} />
      <Info description={description} location={location} rating={rating} />
      <Tabs active={activeTab} handleClick={setActiveTab} options={tabOptions} />
      <TabContent>
        {activeTab === 'images' && <Preview images={images} name={title} />}
        {activeTab === 'features' && <AmenitiesList features={features} />}
        {activeTab === 'reviews' && <Comments playgroundId={_id} rating={rating} reviews={reviews} />}
      </TabContent>
    </Content>
  );
};
