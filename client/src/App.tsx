// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from 'components/Navbar/Navbar';

// LAYOUTS
import ImageLayout from 'layouts/ImageLayout';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={ImageLayout} />
    </Router>
  );
};

export default App;
