import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage.component';
import BooksPage from './pages/bookspage/bookspage.component';
import BookDetails from './components/book-details/book-details.component';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/books/:listId' component={BooksPage} />
        <Route exact path='/details' render={() => (<BookDetails />)} />
      </Switch>
    </div>
  );
}

export default App;
