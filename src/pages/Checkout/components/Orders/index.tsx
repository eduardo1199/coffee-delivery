import { ContainerButtons, OrderInfo, OrderType, Line } from './styles'

import { Trash } from '@phosphor-icons/react'
import coffeeImg from 'assets/traditionalCoffee.png'
import { IncrementButton } from 'components/IncrementButton'

export function Orders() {
  return (
    <>
      <OrderInfo>
        <OrderType>
          <img src={coffeeImg} alt="" />

          <div>
            <p>Expresso Tradicional</p>

            <ContainerButtons>
              <IncrementButton />
              <button type="button">
                <Trash />
                Remover
              </button>
            </ContainerButtons>
          </div>
        </OrderType>

        <span>R$ 9,90</span>
      </OrderInfo>
      <Line />
    </>
  )
}
