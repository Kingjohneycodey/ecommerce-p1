import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/root-layout'
import Home from './pages/home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/others', element: <div>Other page</div> },
    ],
  },
])

export default routes
