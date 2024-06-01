import { RouterProvider } from 'react-router-dom'
import routes from './router'

export function App() {
  return <RouterProvider router={routes} />
}
