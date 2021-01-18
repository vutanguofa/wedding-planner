import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import PhotoGallery from './pages/PhotoGallery';
import GuestList from './pages/GuestList';
import Signup from './pages/Signup';
import Guests from './pages/Guests';
import WeddingFund from './pages/WeddingFund';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/photogallery" component={PhotoGallery} />
              <Route exact path="/weddingfund" component={WeddingFund} />              
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/guestlist/:username?" component={GuestList} />
              <Route exact path="/thought/:id" component={Guests} />

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
