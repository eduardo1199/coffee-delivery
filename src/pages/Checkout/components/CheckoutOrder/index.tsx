import { Orders } from '../Orders'
import { Container, SummaryValue, Total } from './styles'

export function CheckoutOrder() {
  return (
    <Container>
      <Orders />
      <Orders />
      <Orders />
      <SummaryValue>
        <p>Total de itens</p>
        <span>R$ 29,70</span>
        <p>Entrega</p>
        <span>R$ 3,50</span>
        <p>Total</p>
        <Total>R$ 33,20</Total>
      </SummaryValue>
    </Container>
  )
}
