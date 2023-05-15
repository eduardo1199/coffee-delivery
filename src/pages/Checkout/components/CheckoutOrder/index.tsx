import { useContext } from 'react'
import { Orders } from '../Orders'
import { Container, SummaryValue, Total, ConfirmButton } from './styles'
import { ProductsContext } from 'context/ProductsContext'
import { FormattedNumberPrice } from 'utils/formattedNumber'

export function CheckoutOrder() {
  const { summaryOrders, summaryQuantityOrders } = useContext(ProductsContext)

  const formattedSummaryQuantity = FormattedNumberPrice.format(
    summaryQuantityOrders,
  )

  const totalOrder = summaryQuantityOrders + 3.5

  const formattedTotalOrder = FormattedNumberPrice.format(totalOrder)

  return (
    <Container>
      {summaryOrders.map((summary) => {
        return (
          <Orders
            key={summary.id}
            id={summary.id}
            name={summary.name}
            quantity={summary.quantity}
            value={summary.price}
          />
        )
      })}

      <SummaryValue>
        <p>Total de itens</p>
        <span>{formattedSummaryQuantity}</span>
        <p>Entrega</p>
        <span>R$ 3,50</span>
        <p>Total</p>
        <Total>{formattedTotalOrder}</Total>
      </SummaryValue>

      <ConfirmButton type="submit">
        <span>CONFIRMAR PEDIDO</span>
      </ConfirmButton>
    </Container>
  )
}
