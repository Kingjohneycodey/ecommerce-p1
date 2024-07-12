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
        path: '/deal',
        element: <TopDeals />,
      },
            {
        path: '/brands',
        element: <Brands/>,
      },
      {
        path: '/others',
        element: <div>Other page</div>
      },
      { path: '/others', element: <div>Other page</div> },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes
