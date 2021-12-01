const reset = {
  margin: 0,
  padding: 0,
  boxSize: 'border-box'
}

export const themeDefault = {
  colorPrimary: 'green',
  colorSecundary: 'white',
  typography: {
    h1: {
      ...reset,
      fontSize: 56,
      fontFamily: 'sans-serif'
    },
    h2: {
      ...reset,
      fontSize: 48,
      fontFamily: 'sans-serif'
    },
    h3: {
      ...reset,
      fontSize: 36,
      fontFamily: 'sans-serif'
    },
    h4: {
      ...reset,
      fontSize: 32,
      fontFamily: 'sans-serif'
    },
    h5: {
      ...reset,
      fontSize: 24,
      fontFamily: 'sans-serif'
    },
    h6: {
      ...reset,
      fontSize: 20,
      fontFamily: 'sans-serif'
    }
  }
}