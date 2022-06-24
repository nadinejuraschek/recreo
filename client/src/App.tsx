// ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import { Footer, Navbar } from 'components';

// LAYOUTS
import { DefaultLayout, ImageLayout, MapLayout } from 'layouts';

// VIEWS
import { Home, Login, NotFound, Playgrounds, Register, SinglePlayground } from 'views';

// CONTEXT
import { PlaygroundProvider, UserProvider } from 'context';

// STYLES
import 'mapbox-gl/dist/mapbox-gl.css';

const App = (): JSX.Element => (
  <Router>
    <UserProvider>
      <Navbar />
      <Switch>
        {/* Landing */}
        <Route exact path="/">
          <ImageLayout>
            <Home />
          </ImageLayout>
        </Route>
        <Route exact path="/logout">
          <ImageLayout>
            <Home />
          </ImageLayout>
        </Route>

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
        <Route exact path="/playgrounds">
          <PlaygroundProvider>
            <DefaultLayout withMainPadding={false}>
              <Playgrounds />
            </DefaultLayout>
          </PlaygroundProvider>
        </Route>

        {/* Single Playground */}
        <Route exact path="/playgrounds/:id">
          <PlaygroundProvider>
            <MapLayout>
              <SinglePlayground />
            </MapLayout>
          </PlaygroundProvider>
        </Route>
        {/*
            <Route exact path="/playgrounds/:id/edit">
              <PlaygroundProvider>
                <DefaultLayout />
              </PlaygroundProvider>
            /Route>
          */}

        {/* Not Found */}
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </UserProvider>
  </Router>
);

export default App;
