import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function MyApp(){
  return(
    <div>
      <h1>Customer App !</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props:{
      href: `https://www.google.com`,
      target:'_blank'
  },
  children: 'Click me to go the google website'
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: "https://www.google.com", target: "_blank"},
    'Click me to go the google website'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // anotherElement
    // reactElement
    //{/* ReactElement */}
    <App /> 
    // <MyApp /> 
  // </React.StrictMode>,
)
