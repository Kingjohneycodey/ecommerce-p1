import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { register as registerSwiperJS } from 'swiper/element/bundle'
import { RouterProvider } from 'react-router-dom'
import routes from './router'

registerSwiperJS()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
)
