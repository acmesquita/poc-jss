import React from 'react'
import { createTheming } from 'react-jss'
import { themeDefault } from './theme'

const ThemeContext = React.createContext({})
const theming = createTheming(ThemeContext)
const { ThemeProvider, useTheme } = theming


function Theme({ theme = {}, children }) {
  return (
    <ThemeProvider theme={{...theme, ...themeDefault}}>
      {children}
    </ThemeProvider>
  )
}

export {
  Theme,
  useTheme,
  theming,
}
