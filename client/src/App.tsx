// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

// LAYOUTS
import DefaultLayout from 'layouts/DefaultLayout';
import ImageLayout from 'layouts/ImageLayout';
import MapLayout from 'layouts/MapLayout';

// VIEWS
import Login from 'views/Login';
import Playgrounds from 'views/Playgrounds';
import Register from 'views/Register';
import SinglePlayground from 'views/SinglePlayground';

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />

      {/* Landing */}
      <Route exact path="/" component={ImageLayout} />

      {/* Auth */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      {/* Home */}
      <Route exact path="/playgrounds">
        <DefaultLayout>
          <Playgrounds />
        </DefaultLayout>
      </Route>

      {/* Single Playground */}
      <Route exact path="/playgrounds/:id">
        <MapLayout>
          <SinglePlayground />
        </MapLayout>
      </Route>
      <Route exact path="/playgrounds/:id/edit" component={DefaultLayout} />

      <Footer />
    </Router>
  );
};

export default App;
