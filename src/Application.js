import React, { useContext } from 'react';
import Home from './views/home';
import { Provider } from 'react-redux';
import configureStore from './application/store';
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
import { UserContext } from './application/providers/UserProvider';

const store = configureStore();

function Application() {
  const user=useContext(UserContext);
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Header user={user}/>
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
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Application;
