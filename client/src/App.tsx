// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import { Footer, Navbar } from 'components';

// LAYOUTS
import { DefaultLayout, ImageLayout, MapLayout } from 'layouts';

// VIEWS
import { Login, Playgrounds, Register, SinglePlayground } from 'views';

// CONTEXT
import { PlaygroundProvider, UserProvider } from 'context';

// STYLES
import 'mapbox-gl/dist/mapbox-gl.css';

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
            <DefaultLayout withMainPadding={false}>
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
