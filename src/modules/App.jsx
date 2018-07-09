// @flow
import React, { Component } from "react"

type StateType = {
  requests: Array<ChatRequest>,
  selectedRequest: ?ChatRequest,
}

class App extends Component<{}, StateType> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
