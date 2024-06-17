import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/HomePage'

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
