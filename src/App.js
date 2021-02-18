import React from 'react';
import Home from './views/home';
import {Provider} from 'react-redux';
import  configureStore  from './application/store';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

const store=configureStore();

function App() {
  return (
    <Provider store={store} >
    <BrowserRouter>
    <Container fluid>
    <Home />
    </Container>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
