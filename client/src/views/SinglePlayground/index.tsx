// DEPENDENCIES
import { useState } from 'react';

// STYLED COMPONENTS
import { Content, TabContent } from './styles/SinglePlayground';

// COMPONENTS
import Amenities from './components/Amenities';
import Comments from './components/Comments';
import Info from './components/Info';
import Header from './components/Header';
import Preview from './components/Preview';
import Tabs from 'components/Tabs';

// LAYOUT
import MapLayout from 'layouts/MapLayout';

const SinglePlayground = () => {
  const tabOptions = [
    { label: 'Images', name: 'images' },
    { label: 'Features', name: 'features' },
    { label: 'Reviews', name: 'reviews' },
  ];
  const [activeTab, setActiveTab] = useState(tabOptions[0].name);

  return (
    <MapLayout>
      <Content>
        <Header />
        <Info />
        <Tabs active={activeTab} handleClick={setActiveTab} options={tabOptions} />
        <TabContent>
          {activeTab === 'images' && <Preview />}
          {activeTab === 'features' && <Amenities />}
          {activeTab === 'reviews' && <Comments />}
        </TabContent>
      </Content>
    </MapLayout>
  );
};

export default SinglePlayground;
