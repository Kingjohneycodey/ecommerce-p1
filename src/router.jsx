import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/HomePage'
import TopDeals from './pages/Topdeals'
import { PageNotFound } from './pages/PageNotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
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
