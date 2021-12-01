import React from 'react'
import { createTheming, JssProvider } from 'react-jss'
import { themeDefault } from './theme'

const ThemeContext = React.createContext({})
const theming = createTheming(ThemeContext)
const { ThemeProvider, useTheme } = theming

const generateId = (rule) => `prisma-${rule.key}-${Math.floor(Math.random() * 5000)}`

function Theme({ theme = {}, children }) {
  return (
    <JssProvider generateId={generateId}>
      <ThemeProvider theme={{...theme, ...themeDefault}}>
        {children}
      </ThemeProvider>
    </JssProvider>
  )
}

export {
  Theme,
  useTheme,
  theming,
}
