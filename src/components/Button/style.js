import { makeStyles } from '../../hooks'

export const useStyles = makeStyles({
  btn: {
    border: 'none',
    borderRadius: 4,
    padding: '8px 16px',
    background: ({theme}) => theme.colorPrimary,
    cursor: 'pointer',
    '&:hover': {
      background: 'yellow'
    }
  },
  label: {
    color: ({theme}) => theme.colorSecundary,
    fontSize: 16
  },
})