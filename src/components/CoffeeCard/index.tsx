import { ShoppingCart } from '@phosphor-icons/react'
import traditional from '../../assets/traditionalCoffee.png'
import {
  CoffeeCardContainer,
  ContainerSummary,
  ButtonContainer,
  ButtonAddShopping,
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

      <h4>TRADICIONAL</h4>

      <strong>{props.name}</strong>

      <p>O tradicional café feito com água quente e grãos moídos</p>

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
