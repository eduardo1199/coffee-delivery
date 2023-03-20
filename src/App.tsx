import { GlobalStyle } from './styles/global'
import { theme } from './tokens/styled'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Routes } from './Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
