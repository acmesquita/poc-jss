import { Button, Typography } from './components'
import { Theme } from './context'

function App() {
  return (
    <Theme>
      <Button>Hello JSS</Button>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="h3">Hello</Typography>
      <Typography variant="h4">Hello</Typography>
      <Typography variant="h5">Hello</Typography>
      <Typography variant="h6">Hello</Typography>
    </Theme>
  );
}

export default App;
