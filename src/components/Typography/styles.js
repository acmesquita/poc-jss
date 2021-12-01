import { makeStyles } from "../../hooks";

export const useStyles = makeStyles({
  h1: ({ theme }) => ({...theme.typography.h1}),
  h2: ({ theme }) => ({...theme.typography.h2}),
  h3: ({ theme }) => ({...theme.typography.h3}),
  h4: ({ theme }) => ({...theme.typography.h4}),
  h5: ({ theme }) => ({...theme.typography.h5}),
  h6: ({ theme }) => ({...theme.typography.h6}),
})