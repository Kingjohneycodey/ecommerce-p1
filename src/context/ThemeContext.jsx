import { createContext, useEffect, useState } from 'react'

const initialState = {
  theme: 'system',
  setTheme: () => null,
}

export const ThemeProviderContext =
  createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  const [actualTheme, setActualTheme] = useState(
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)')
          .matches
        ? 'dark'
        : 'light'
      : theme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
      setActualTheme(() =>
        theme === 'system'
          ? window.matchMedia(
              '(prefers-color-scheme: dark)'
            ).matches
            ? 'dark'
            : 'light'
          : theme
      )
    },
    actualTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
