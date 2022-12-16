import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from "./pages/Error";
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/restaurant/:name",
    element: <Restaurant />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
