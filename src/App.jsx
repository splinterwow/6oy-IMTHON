import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// context
import { useContext } from "react";
import { GlobalContext } from "./Context/useGlobal";

// layout
import MainLayout from "./layout/MainLayout";

// components
import ProtectedRoutes from "./components/ProtectedRoutes";

// pages
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  // GlobalContext dan foydalanuvchini olib kelamiz
  const { user } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        // foydalanuvchi mavjudligini tekshirish
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/createRecipe",
          element: <CreateRecipe />,
        },
      ],
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
