import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
])

export function Routes() {
  return <RouterProvider router={routes} />
}
