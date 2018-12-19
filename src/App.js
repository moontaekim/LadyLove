import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import styled from 'styled-components'

const StyledBackground = styled.div`
  background:white;
`
class App extends Component {
  render() {
    return (
      <StyledBackground>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </Router>
      </StyledBackground>
    );
  }
}

export default App;
