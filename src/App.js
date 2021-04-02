import React from 'react';
import Home from './views/home';
import { Provider } from 'react-redux';
import configureStore from './application/store';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Movies } from './views/movies';
import { Header } from './views/home/components';
import { Search } from './views/search';
import Shows from './views/shows';
import { People } from './views/people';
import { Movie } from './views/movie';
import Footer from './views/footer';
import SignIn from './views/signin';
import SignUp from './views/signup';
import ForgotPassword from './views/forgotpassword';

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Container fluid style={{backgroundColor:"whitesmoke"}}>
          <Header />
          <Switch>
            <Route path="/people/:term">
              <People />
            </Route>
            <Route path="/movies/:term">
              <Movies />
            </Route>
            <Route path="/shows/:term">
              <Shows />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
