import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './styled';
import { IconfontStyle } from './static/iconfont/index.js';

import AsyncComponent from './utils/AsyncComponent';
import MHeader from './common/header';
import store from './store';

const AsyncTopic = AsyncComponent(() => import('./pages/Topic'));
const AsyncLogin = AsyncComponent(() => import('./pages/login'));
const AsyncNoMatch = AsyncComponent(() => import('./common/NoMatch'));
const AsyncRegister = AsyncComponent(() => import('./pages/Register'));

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <GlobalStyle />
          <IconfontStyle />
          <MHeader />
          <Switch>
            <Route exact path="/" render={() => <div>111</div>} />
            <Route path="/topic" component={AsyncTopic} />
            <Route path="/register" component={AsyncRegister} />
            <Route path="/login" component={AsyncLogin} />
            <Route render={props => <AsyncNoMatch {...props} />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
