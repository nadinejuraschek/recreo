import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from 'components';
import { DefaultLayout, ImageLayout, MapLayout } from 'layouts';
import { Home, Login, NotFound, Playgrounds, Register, SinglePlayground } from 'views';
import { PlaygroundProvider, UserProvider } from 'context';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = (): JSX.Element => (
  <Router>
    <UserProvider>
      <Navbar />
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={
            <ImageLayout>
              <Home />
            </ImageLayout>
          }
        />
        <Route
          path="/logout"
          element={
            <ImageLayout>
              <Home />
            </ImageLayout>
          }
        />

        {/* Auth */}
        <Route
          path="/login"
          element={
            <ImageLayout>
              <Login />
            </ImageLayout>
          }
        />
        <Route
          path="/register"
          element={
            <ImageLayout>
              <Register />
            </ImageLayout>
          }
        />

        {/* Home */}
        <Route
          path="/playgrounds"
          element={
            <PlaygroundProvider>
              <DefaultLayout withMainPadding={false}>
                <Playgrounds />
              </DefaultLayout>
            </PlaygroundProvider>
          }
        />

        {/* Single Playground */}
        <Route
          path="/playgrounds/:id"
          element={
            <PlaygroundProvider>
              <MapLayout>
                <SinglePlayground />
              </MapLayout>
            </PlaygroundProvider>
          }
        />
        {/*
            <Route exact path="/playgrounds/:id/edit" element={
              <PlaygroundProvider>
                <DefaultLayout />
              </PlaygroundProvider>
            }
            />
          */}

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </UserProvider>
  </Router>
);

export default App;
