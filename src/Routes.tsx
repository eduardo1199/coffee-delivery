import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { FinishOrder } from 'pages/FinishOrder'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/finish',
    element: <FinishOrder />,
  },
])

export function Routes() {
  return <RouterProvider router={routes} />
}
