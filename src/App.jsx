import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Inscription } from "./pages/Inscription";
import { Login } from "./pages/login";
import { Reservation } from "./pages/reservationnn";
import { Roc } from "./pages/roc";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Inscription />,
  },
  {
    path: "/services",
    element: <Reservation />,
  },
  {
    path: "/reddy",
    element: <Roc />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
