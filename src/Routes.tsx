import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { FinishOrder } from 'pages/FinishOrder'
import { DefaultLayout } from 'layouts/DefaultLayout'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/finish',
        element: <FinishOrder />,
      },
    ],
  },
])

export function Routes() {
  return <RouterProvider router={routes} />
}
