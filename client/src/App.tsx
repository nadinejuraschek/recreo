import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Footer, Navbar } from 'components';
import { DefaultLayout, ImageLayout, MapLayout } from 'layouts';
import { Auth, Home, NotFound, Playgrounds, SinglePlayground } from 'views';
import { UserProvider } from 'context';
import 'mapbox-gl/dist/mapbox-gl.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AUTH_MODE } from 'views/Auth/types';

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
                  <Auth mode={AUTH_MODE.LOGIN} />
                </ImageLayout>
              }
            />
            <Route
              path="/register"
              element={
                <ImageLayout>
                  <Auth mode={AUTH_MODE.REGISTER} />
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
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toasterId="default"
            toastOptions={{
              duration: 5000,
              removeDelay: 1000,
              style: {
                fontSize: '1.5rem',
              },
              error: {
                style: {
                  backgroundColor: 'var(--danger__light)',
                  borderColor: 'var(--danger)',
                  color: 'var(--danger)',
                },
                iconTheme: {
                  primary: 'var(--danger)',
                  secondary: 'var(--danger__light)',
                },
              },
              success: {
                duration: 5000,
                style: {
                  backgroundColor: 'var(--success__light)',
                  borderColor: 'var(--success)',
                  color: 'var(--success)',
                },
                iconTheme: {
                  primary: 'var(--success)',
                  secondary: 'var(--success__light)',
                },
              },
            }}
          />
        </UserProvider>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
