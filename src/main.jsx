import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// setInterval(() => {
//   const element = (
//     <h1>
//          Hello {new Date().toLocaleDateString()}
//     </h1>
//   );
 
// }, 1000);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
