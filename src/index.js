import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// reset html
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    padding: 0;
    font-family: 'Recoleta', Helvetica, Sans-Serif;
    scrollbar-width: auto;
    scrollbar-color: #212121 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #212121;
    border-radius: 4px;
    border: 3px solid #ffffff;
  }
`

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
