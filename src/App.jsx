import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootPage} from "./pages/Root.jsx";
import {HomePage, action as signUpAction,
    loader as rootLoader} from "./pages/Home";
import {LoginPage} from "./pages/Login";
import {ProductsPage,
loader as productsLoader} from "./pages/Products";
import {ProductPage,
loader as productLoader} from "./pages/Product";
import {action as loginAction, loader as loginLoader} from './components/LoginPage/LoginPageForm.jsx'
import {loader as itemLoader} from './components/ProductsPage/ProductsPageContainer'
import {Profile} from "./pages/Profile.jsx";

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
         element: <LoginPage />,
         action: loginAction,
         loader: loginLoader
     },
     {
         path: 'products',
         id: 'products',
         element: <ProductsPage />,
         children: [
             {
                 index: true,
                 element: <ProductPage/>,
                 loader: productLoader,
             },
             {
                 path: ':productId',
                 element: <ProductPage/>,
                 loader: productLoader
             }
         ]
     },
   ]
  },
    {
        path: 'profile',
        element: <Profile />
    }
])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router}/>
}

export default App
