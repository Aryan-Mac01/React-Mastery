import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 

//CreateRoot -> the createroot helps to create a DOM, it creates a DOM and then compare it with the original one and update only those things that are changes in UI.
