import { makeStyles } from '../../hooks'

export const useStyles = makeStyles({
  btn: {
    background: ({theme}) => theme.colorPrimary
  },
  label: {
    color: ({theme}) => theme.colorSecundary
  },
})