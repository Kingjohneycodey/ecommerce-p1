import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'

// pages
import HomePage from './pages/HomePage'
import SellersPage from './pages/SellersPage'
import TopDeals from './pages/Topdeals'
import { PageNotFound } from './pages/PageNotFound'
import Brands from './pages/BrandsPage'
import Coupons from './pages/Coupons'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/sellers',
        element: <SellersPage />,
      },
      {
        path: '/coupons',
        element: <Coupons />,
      },
      {
        path: '/others',
        element: <div>Other page</div>
      },
      { path: '/others', element: <div>Other page</div> },
    ],
  },
  {
    path: 'deal',
    element: <RootLayout />,
    children: [{ index: true, element: <TopDeals /> }],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '/brands',
    element: <Brands />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes
