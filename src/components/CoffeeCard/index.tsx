import { ShoppingCart } from '@phosphor-icons/react'
import traditional from '../../assets/traditionalCoffee.png'
import {
  CoffeeCardContainer,
  ContainerSummary,
  ButtonContainer,
  ButtonAddShopping,
  CarouselType,
} from './styles'
import { IncrementButton } from 'components/IncrementButton'
import { TypeCoffee } from '../../types/productsType'
import { FormattedNumberPrice } from 'utils/formattedNumber'
import { useContext, useState } from 'react'
import { ProductsContext } from 'context/ProductsContext'

interface CoffeeCardProps {
  name: string
  id: number
  price: number
  type: TypeCoffee[]
  description: string
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { addProductInCartShopping } = useContext(ProductsContext)

  const [quantity, setQuantity] = useState<number>(0)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity === 0) return

    setQuantity((state) => state - 1)
  }

  function handleAddProductFromCart() {
    const productId = props.id

    addProductInCartShopping(productId, quantity)

    setQuantity(0)
  }

  return (
    <CoffeeCardContainer>
      <img src={traditional} alt="Coffee traditional" />

      <CarouselType>
        {props.type.map((type) => (
          <h4 key={type}>{type}</h4>
        ))}
      </CarouselType>

      <strong>{props.name}</strong>

      <p>{props.description}</p>

      <ContainerSummary>
        <strong>{FormattedNumberPrice.format(props.price)}</strong>
        <ButtonContainer>
          <IncrementButton
            onDecrement={decrementQuantity}
            onIncrement={incrementQuantity}
            quantity={quantity}
          />
          <ButtonAddShopping onClick={handleAddProductFromCart}>
            <ShoppingCart />
          </ButtonAddShopping>
        </ButtonContainer>
      </ContainerSummary>
    </CoffeeCardContainer>
  )
}
