import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useData } from './Store/WeatherProvider';


import Home from './components/Home/Home';
import Weekly from './components/Weather/Weekly';
import Layout from './components/Layout/index';
import Today from './components/Weather/Today';

const App = () => {
  return (
    <Router>
      <AppBox>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/weekly' component={Weekly} />
            <Route path='/current' component={Today} />
          </Switch>
        </Layout>
      </AppBox>
    </Router>
  );
}

export default App;

const AppBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    `;
