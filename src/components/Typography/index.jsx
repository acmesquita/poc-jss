import React from 'react'
import { useTheme } from '../Theme'
import { useStyles} from './styles'

export const Typography = ({ variant, children }) => {
  const classes = useStyles({ theme: useTheme() })
  
  switch (variant) {
    case 'h1': return <h1 className={classes[variant]}>{children}</h1>
    case 'h2': return <h2 className={classes[variant]}>{children}</h2>
    case 'h3': return <h3 className={classes[variant]}>{children}</h3>
    case 'h4': return <h4 className={classes[variant]}>{children}</h4>
    case 'h5': return <h5 className={classes[variant]}>{children}</h5>
    case 'h6': return <h6 className={classes[variant]}>{children}</h6>
    default:   return <p  className={classes[variant]}>{children}</p>
  }
}
