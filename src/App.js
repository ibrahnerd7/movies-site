import React from 'react';
import Home from './views/home';
import { Provider } from 'react-redux';
import configureStore from './application/store';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Movies } from './views/movies';
import { Header } from './views/home/components';

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Container fluid>
          <Header />
          <Switch>
            <Route path="/movies/:term">
              <Movies />
            </Route>
            <Route path="/search?">
              <Home />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
