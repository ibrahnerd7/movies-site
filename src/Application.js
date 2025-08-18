import React, { useContext } from 'react';
import Home from './views/home';
import { Provider } from 'react-redux';
import configureStore from './application/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { Favourites } from './views/favourites';

const store = configureStore();

function Application() {
  const user=useContext(UserContext);
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div>
          <Header user={user}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people/:term" element={<People />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movies/:term" element={<Movies />}/>
            <Route path="/shows/:term" element={<Shows />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={ <Movie/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Application;
