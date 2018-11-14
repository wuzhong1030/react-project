import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Topic from './pages/Topic'
import { GlobalStyle } from './styled'
import { IconfontStyle } from './static/iconfont/index.js'

import MHeader from './common/header'
import About from './pages/About'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <IconfontStyle />
            <MHeader></MHeader>
            <Route extra path="/" render={() => <div>111</div>} />
            <Route extra path="/topic" component={Topic} />
            <Route extra path="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
