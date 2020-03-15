import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/books' component={BooksPage} />
      </Switch>
    </div>
  );
}

export default App;
