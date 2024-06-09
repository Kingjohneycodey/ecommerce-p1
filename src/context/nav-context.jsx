import { createContext, useContext, useState } from 'react'

const initialState = {
  navOpen: false,
  setNavOpen: () => {},
}

export const NavContext = createContext(initialState)

export function NavContextProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)

  const value = {
    navOpen,
    setNavOpen,
  }

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  )
}

export function useNavContext() {
  const context = useContext(NavContext)

  if (context === undefined) {
    throw new Error(
      'useNavContext must be used within a NavContextProvider'
    )
  }
  return context
}
