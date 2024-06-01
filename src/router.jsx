import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/root-layout'
import Home from './pages/home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { index: '/others', element: <div>Other page</div> },
    ],
  },
])

export default routes
