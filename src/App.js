import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Topic from './pages/Topic'
import { GlobalStyle } from './styled'

import MHeader from './common/header'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <MHeader></MHeader>
            <Route extra path="/" render={() => <div>111</div>} />
            <Route extra path="/topic" component={Topic} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
