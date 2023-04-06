import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/Root.jsx";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { ProductsPage } from "./pages/Products";
import { ProductPage, loader as productLoader } from "./pages/Product";
import { action as loginAction } from "./components/LoginPage/LoginPageForm.jsx";
import { action as registerAction } from "./components/HomePage/RegisterForm.jsx";
import { Profile } from "./pages/Profile.jsx";
import { SampleOutlet } from "./components/ProfilePage/SampleOutlet";
import { TokensPage } from "./pages/Tokens";
import { LockerPage } from "./pages/Locker";
import { SettingsPage } from "./pages/Settings";
import { HelpPage } from "./pages/Help";
import { loader as logoutLoader } from "./components/HomePage/LogOut.jsx";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: registerAction,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "logout",
        loader: logoutLoader,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            index: true,
            element: <ProductPage />,
            loader: productLoader,
          },
          {
            path: ":productId",
            element: <ProductPage />,
            loader: productLoader,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <SampleOutlet />,
          },
          {
            path: "tokens",
            element: <TokensPage />,
          },
          {
            path: "locker",
            element: <LockerPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "help",
            element: <HelpPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const theme = useSelector((store) => store.theme.theme); // Used to get the current color mode
  const className = useSelector((store) => store.background.className); // Used to fix the bas on HomePage

  return (
    <div className={className} data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export const theme = App.theme;

export default App;
