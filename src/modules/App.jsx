// @flow
import React, { Component } from 'react'
import { Router } from './Router'

import { Header } from './shared/components/layout/Header'
import { Footer } from './shared/components/layout/Footer'

class App extends Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
