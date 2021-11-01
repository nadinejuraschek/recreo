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

// CONTEXT
import { PlaygroundProvider } from 'context/PlaygroundContext';
import { UserProvider } from 'context/UserContext';

const App = (): JSX.Element => {
  return (
    <Router>
      <UserProvider>
        <Navbar />

        {/* Landing */}
        <Route exact path="/" component={ImageLayout} />

        {/* Auth */}
        <Route exact path="/login">
          <ImageLayout>
            <Login />
          </ImageLayout>
        </Route>
        <Route exact path="/register">
          <ImageLayout>
            <Register />
          </ImageLayout>
        </Route>

        {/* Home */}
        <PlaygroundProvider>
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
        </PlaygroundProvider>

        <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;
