import React from 'react'
import { createTheming } from 'react-jss'
import { themeDefault } from '../../styles/theme'
import { ConfigProvider } from '../ConfigProvider'

const ThemeContext = React.createContext({})
const theming = createTheming(ThemeContext)
const { ThemeProvider, useTheme } = theming

function Theme({ theme = {}, children }) {
  return (
    <ConfigProvider>
      <ThemeProvider theme={{...theme, ...themeDefault}}>
        {children}
      </ThemeProvider>
    </ConfigProvider>
  )
}

export {
  Theme,
  useTheme,
  theming,
}
