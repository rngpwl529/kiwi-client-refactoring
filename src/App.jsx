import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import IntroContainer from './pages/IntroContainer'
import MainContrainer from './pages/MainContainer'

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