import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from 'components';
import { DefaultLayout, ImageLayout, MapLayout } from 'layouts';
import { Home, Login, NotFound, Playgrounds, Register, SinglePlayground } from 'views';
import { UserProvider } from 'context';
import 'mapbox-gl/dist/mapbox-gl.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
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
                <DefaultLayout withMainPadding={false}>
                  <Playgrounds />
                </DefaultLayout>
              }
            />

            {/* Single Playground */}
            <Route
              path="/playgrounds/:id"
              element={
                <MapLayout>
                  <SinglePlayground />
                </MapLayout>
              }
            />
            {/*
            <Route exact path="/playgrounds/:id/edit" element={
                <DefaultLayout />
            }
            />
          */}

            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </UserProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
