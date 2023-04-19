import { Container } from './styles'

export function IncrementButton() {
  return (
    <Container>
      <button>
        <span>-</span>
      </button>
      <span>1</span>
      <button>
        <span>+</span>
      </button>
    </Container>
  )
}
