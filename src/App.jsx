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
// import KakaoContainer from './pages/KakaoContainer';
import Oauth from './Oauth'
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
        {/* <Route path='/ouath/kakao'>
          <KakaoContainer/>
        </Route> */}
        <Route path='/oauth/callback/kakao'>
              <Oauth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;