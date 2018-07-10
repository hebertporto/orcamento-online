import React from "react"
import ReactDOM from "react-dom"
import registerServiceWorker from "./config/registerServiceWorker"

import App from "./modules/App"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
