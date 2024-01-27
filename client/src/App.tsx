import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
