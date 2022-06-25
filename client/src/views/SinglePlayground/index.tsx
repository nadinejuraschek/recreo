// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Content, TabContent } from './styles';

// COMPONENTS
import { AmenitiesList } from 'components';
import { Comments, ErrorState, Header, Info, Preview } from './sections';
import { LoadingSpinner, Tabs } from 'components';

// HOOKS
import { usePlayground } from 'hooks/usePlayground';

export const SinglePlayground = (): JSX.Element => {
  const tabOptions = [
    { label: 'Images', name: 'images' },
    { label: 'Features', name: 'features' },
    { label: 'Reviews', name: 'reviews' },
  ];
  const [activeTab, setActiveTab] = useState<string>(tabOptions[0].name);

  const { isLoading, error, playground } = usePlayground();

  if (isLoading) {
    return <LoadingSpinner containerHeight="100%" containerWidth="100%" />;
  }

  if (error || !playground) {
    return <ErrorState />;
  }

  const { description, features, location, rating, reviews, title, _id } = playground;

  // TODO: Add Multiple Images

  return (
    <Content>
      <Header name={title} />
      <Info description={description} location={location} rating={rating} />
      <Tabs active={activeTab} handleClick={setActiveTab} options={tabOptions} />
      <TabContent>
        {activeTab === 'images' && <Preview name={title} />}
        {activeTab === 'features' && <AmenitiesList features={features} />}
        {activeTab === 'reviews' && <Comments playgroundId={_id} reviews={reviews} />}
      </TabContent>
    </Content>
  );
};
