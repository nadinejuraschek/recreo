// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Content, TabContent } from './styles/SinglePlayground';

// COMPONENTS
import { Amenities, Comments, ErrorState, Header, Info, Preview } from './sections';
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

  if (error) {
    return <ErrorState />;
  }

  // TODO: Add Multiple Images

  return (
    <Content>
      <Header name={playground?.title} />
      <Info description={playground?.description} location={playground?.location} rating={playground?.rating} />
      <Tabs active={activeTab} handleClick={setActiveTab} options={tabOptions} />
      <TabContent>
        {activeTab === 'images' && <Preview name={playground?.title} />}
        {activeTab === 'features' && <Amenities />}
        {activeTab === 'reviews' && <Comments reviews={playground?.reviews} />}
      </TabContent>
    </Content>
  );
};
