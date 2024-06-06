import { RouterProvider } from 'react-router-dom'
import routes from './router'
import Slids from './components/Slids';

function App() {
  // we can wrap all other providers here I guess
  return <>
  <RouterProvider router={routes} />
  <Slids/>
  </>
}

export default App;
 