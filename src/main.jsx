import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {store} from "./store/index.js";
import {Provider} from "react-redux";
import {IconContext} from "react-icons";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <Toaster />
      <IconContext.Provider value={{className: 'custom-icons'}}>
      <Provider store={store}>
    <App />
      </Provider>
      </IconContext.Provider>
  </>
)
