import { RouterProvider } from 'react-router-dom'
import routes from './router'
import "./styles/auction.css"

function App() {
  // we can wrap all other providers here I guess
  return <RouterProvider router={routes} />
}

export default App
