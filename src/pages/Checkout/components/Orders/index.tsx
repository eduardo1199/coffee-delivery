import { ContainerButtons, OrderInfo, OrderType, Line } from './styles'

import { Trash } from '@phosphor-icons/react'
import coffeeImg from 'assets/traditionalCoffee.png'
import { IncrementButton } from 'components/IncrementButton'
import { ProductsContext } from 'context/ProductsContext'
import { useContext, useEffect, useState } from 'react'
import { FormattedNumberPrice } from 'utils/formattedNumber'

interface OrdersProps {
  name: string
  quantity: number
  value: number
  id: number
}

export function Orders(props: OrdersProps) {
  const { decrementProductSummary, incrementProductSummary } =
    useContext(ProductsContext)

  function incrementQuantity() {
    incrementProductSummary(props.id)
  }

  function decrementQuantity() {
    if (props.quantity === 0) return

    decrementProductSummary(props.id)
  }

  const currencyTotalOrder = FormattedNumberPrice.format(
    props.quantity * props.value,
  )

  return (
    <>
      <OrderInfo>
        <OrderType>
          <img src={coffeeImg} alt="" />

          <div>
            <p>{props.name}</p>

            <ContainerButtons>
              <IncrementButton
                onDecrement={decrementQuantity}
                onIncrement={incrementQuantity}
                quantity={props.quantity}
              />
              <button type="button">
                <Trash />
                Remover
              </button>
            </ContainerButtons>
          </div>
        </OrderType>

        <span>{currencyTotalOrder}</span>
      </OrderInfo>
      <Line />
    </>
  )
}
