import { createBrowserRouter } from 'react-router-dom'

// pages
import HomePage from './pages/HomePage'
import SellersPage from './pages/SellersPage'
import TopDeals from './pages/Topdeals'
import { PageNotFound } from './pages/PageNotFound'
import Brands from './pages/BrandsPage'
import App from './App'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/sellers',
        element: <SellersPage />,
      },
      {
        path: '/deal',
        element: <TopDeals />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/brands',
    element: <Brands />,
  },
])

export default routes
