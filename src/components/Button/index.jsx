import React from 'react'
import { useTheme } from '../../context'
import { useStyles } from './style'

export const Button = ({ children }) => {
  const classes = useStyles({ theme: useTheme()})

  return (
    <button className={classes.btn}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}
