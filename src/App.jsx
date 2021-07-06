import './App.css';
import './scss/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import IntroContainer from './pages/IntroContainer'
import MainContrainer from './pages/MainContainer'
import React from "react"

const App= () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>  
          <Redirect to ='/intro' />
        </Route>
        <Route path='/intro'>
          <IntroContainer />
        </Route>
        <Route path='/main'>
          <MainContrainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;