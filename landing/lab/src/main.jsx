import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from "./components/App.jsx"
const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)
root.render(<App/>)

console.log("hiii")
