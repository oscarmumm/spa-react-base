import { createBrowserRouter } from "react-router-dom"
import { LayoutPublic } from "../layout/LayoutPublic"
import { NotFound } from "../views/NotFound"
import { Home } from "../views/Home"
import { About } from "../views/About"
import { Products } from "../views/Products"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  },
])