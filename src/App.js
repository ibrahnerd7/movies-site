import React from 'react';
import { Provider } from 'react-redux';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import configureStore from './application/store';
import UserProvider from './application/providers/UserProvider';
import Application from './Application';

const store = configureStore();

toast.configure();
function App() {
  return (
    <Provider store={store} >
      <UserProvider>
        <Application />
      </UserProvider>
    </Provider>
  );
}

export default App;
