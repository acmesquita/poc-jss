import { createUseStyles } from "react-jss"
import { theming } from '../context'


export const makeStyles = (styles) => {
  return createUseStyles(
    {...styles},
    {theming}
  )
}