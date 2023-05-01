import { GlobalStyle } from './styles/global'
import { theme } from './tokens/styled'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { Routes } from './Routes'
import { ProductContextProvider } from 'context/ProductsContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductContextProvider>
        <Routes />
        <GlobalStyle />
      </ProductContextProvider>
    </ThemeProvider>
  )
}

export default App
