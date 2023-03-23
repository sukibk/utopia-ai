import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root.jsx";
import {HomePage} from "./pages/Home";

const router = createBrowserRouter([
  {path: '/',
   element: <RootPage />,
   children: [
     {
       index: true,
       element: <HomePage />
     }
   ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App
