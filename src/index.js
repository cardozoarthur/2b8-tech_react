import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Container } from './components/Container';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Private from './components/Private';
import Map from './pages/Map';
import Form from './pages/Form';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/signin">
        <Container>
          <Signin />
        </Container>
      </Route>
      <Route path="/signup">
        <Container>
          <Signup />
        </Container>
      </Route>
      <Route path="/map">
        <Container>
          <Private>
            <Map />
          </Private>
        </Container>
      </Route>
      <Route path="/form">
        <Container>
          <Private>
            <Form />
          </Private>
        </Container>
      </Route>
      <Route exact path="/">
        <Container>
          <Private>
            <Home />
          </Private>
        </Container>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);