// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from 'components/Navbar/Navbar';

// LAYOUTS
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import ImageLayout from 'layouts/ImageLayout/ImageLayout';

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Landing */}
      <Route exact path="/" component={ImageLayout} />

      {/* Auth */}
      <Route exact path="/login" component={ImageLayout} />
      <Route exact path="/register" component={ImageLayout} />

      {/* Home */}
      <Route exact path="/playgrounds" component={DefaultLayout} />

      {/* Single Playground */}
      <Route exact path="/playgrounds/:id" component={DefaultLayout} />
    </Router>
  );
};

export default App;
