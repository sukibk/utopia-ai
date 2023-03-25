import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root.jsx";
import {HomePage, action as signUpAction,
    loader as rootLoader} from "./pages/Home";
import {LoginPage} from "./pages/Login";
import {ProductsPage} from "./pages/Products";

const router = createBrowserRouter([
  {path: '/',
   element: <RootPage />,
   children: [
     {
       index: true,
       element: <HomePage />,
       action: signUpAction,
       loader: rootLoader,
     },
     {
         path: 'login',
         element: <LoginPage />
     },
     {
         path: 'products',
         element: <ProductsPage />
     }
   ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App
