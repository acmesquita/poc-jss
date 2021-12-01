import { createUseStyles } from "react-jss"
import { theming } from '../components/Theme'

export const makeStyles = (styles) => {
  return createUseStyles(
    {...styles},
    {theming}
  )
}