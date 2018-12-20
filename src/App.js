import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Topic from "./pages/Topic";
import { GlobalStyle } from "./styled";
import { IconfontStyle } from "./static/iconfont/index.js";

import MHeader from "./common/header";
import store from "./store";
import Login from "./pages/login";
import NoMatch from "./common/NoMatch";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <IconfontStyle />
            <MHeader />
            <Switch>
              <Route exact path="/" render={() => <div>111</div>} />
              <Route path="/topic" component={Topic} />
              <Route path="/login" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
