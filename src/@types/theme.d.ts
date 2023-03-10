import 'styled-components'
import { theme } from '../tokens/styled'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
