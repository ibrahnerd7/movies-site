import React from 'react';
import Home from './views/home';
import {Provider} from 'react-redux';
import  configureStore  from './application/store';

const store=configureStore();

function App() {
  return (
    <Provider store={store} >
    <Home />
    </Provider>
  );
}

export default App;
