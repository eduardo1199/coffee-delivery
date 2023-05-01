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

interface CoffeeCardProps {
  name: string
  id: number
  price: number
  type: TypeCoffee[]
  description: string
}

export function CoffeeCard(props: CoffeeCardProps) {
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
          <IncrementButton />
          <ButtonAddShopping>
            <ShoppingCart />
          </ButtonAddShopping>
        </ButtonContainer>
      </ContainerSummary>
    </CoffeeCardContainer>
  )
}
