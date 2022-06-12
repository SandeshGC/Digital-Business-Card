import React from "react"
// import ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import App from "./App"

const rootEl = document.getElementById("root")
// ReactDOM.render(<App />, rootEl)
const root = createRoot(rootEl)
root.render(<App />)