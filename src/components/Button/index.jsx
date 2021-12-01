import React from 'react'
import { useStyles } from './style'

export const Button = ({ children }) => {
  const classes = useStyles()

  return (
    <button className={classes.btn}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}
