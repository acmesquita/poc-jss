# POC use JSS to React Components

This POC is to understand how the JSS library works and how we could use its functionalities to generate a modular CSS.

### Study Requirements

- [x] Use basic to `createUseStyles`
- [x] Hook creation for abstraction of creating a themed styling (`makeStyle`)
- [x] Customize components using theme settings
- [x] Abstraction for creating random names for classes

### Getting Starting

### Start project

```bash
yarn install
yarn start
```

Go to http://localhost:3000.

### How to use

The `Theme` component wraps the entire application, it works as a style provider for the components, which you can use via the `useTheme` hook.

```jsx
<Theme>
  // Wrap all application
</Theme>
```

Also, the main helper function is `makeStyles`. This function is responsible for transforming javascript objects into CSS classes. To use it, just import and execute the return function.

```jsx
import { makeStyles } from 'src/hook'

function Button({ children }) {
  const useStyles = makeStyles({
    wrap: {
      backgroundColor: 'green'
    },
    label: {
      color: 'white'
    }
  })

  const classes = useStyles()

  return (
    <button className={classes.wrap}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}

```

#### Example with `useTheme`

```jsx
import { makeStyles } from 'src/hook'
import { useTheme } from 'src/context'

function Button({ children }) {
  const theme = useTheme()
  const useStyles = makeStyles({
    wrap: {
      backgroundColor: ({ theme }) => theme.colorPrimary
    },
    label: {
      color: 'white'
    }
  })

  const classes = useStyles({ theme })

  return (
    <button className={classes.wrap}>
      <span className={classes.label}>{children}</span>
    </button>
  )
}

```