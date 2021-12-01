import React from 'react'
import { useTheme } from '../Theme'
import { useStyles } from './style'

export const Button = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <button className={classes.btn}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}
