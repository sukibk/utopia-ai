import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Root.scss'
import {store} from "./store/index.js";
import {Provider} from "react-redux";
import {IconContext} from "react-icons";
import {Toaster} from "react-hot-toast";
import '../.mirrorful/theme.css'
import '../.mirrorful/darktheme.css'
import theme from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <Toaster toastOptions={{className: 'hot-toast',
      style: {backgroundColor:'var(--color-background-primary)',
      color: 'var(--color-text-primary)'}}}/>
      <IconContext.Provider value={{className: 'custom-icons'}}>
      <Provider store={store}>
    <App/>
      </Provider>
      </IconContext.Provider>
  </>
)
