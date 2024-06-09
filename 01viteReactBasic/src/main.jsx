import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


const reactElement = React.createElement( //creating custom react as per react's syntax
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    //reactElement //......it is an object that's why it is called like this
    <App/>
  
)
