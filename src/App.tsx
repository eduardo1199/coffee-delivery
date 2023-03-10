import { GlobalStyle } from './styles/global'
import { theme } from './tokens/styled'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
