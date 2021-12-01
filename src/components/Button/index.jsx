import React from 'react'
import { useStyles } from './styles'

export const Button = (props) => {
  const classes = useStyles()

  return (
    <button className={classes.btn}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}
