// ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

// LAYOUTS
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import ImageLayout from 'layouts/ImageLayout/ImageLayout';

// VIEWS
import Login from 'views/Login/Login';

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Landing */}
      <Route exact path="/" component={ImageLayout} />

      {/* Auth */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={ImageLayout} />

      {/* Home */}
      <Route exact path="/playgrounds" component={DefaultLayout} />

      {/* Single Playground */}
      <Route exact path="/playgrounds/new" component={DefaultLayout} />
      <Route exact path="/playgrounds/:id" component={DefaultLayout} />
      <Route exact path="/playgrounds/:id/edit" component={DefaultLayout} />

      <Footer />
    </Router>
  );
};

export default App;
