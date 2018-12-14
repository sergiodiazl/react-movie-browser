import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './components/Header';
import Main from './components/Main';
import Movie from './components/Movie';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/movies/:movieId" component={Movie} />
        </ Switch>
      </div>
    </BrowserRouter>
  )
}


export default App;
