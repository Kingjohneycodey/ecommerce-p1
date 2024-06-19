import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'

// pages
import HomePage from './pages/HomePage'
import SellersPage from './pages/SellersPage'
import TopDeals from './pages/Topdeals'
import { PageNotFound } from './pages/PageNotFound'

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
])

export default routes
