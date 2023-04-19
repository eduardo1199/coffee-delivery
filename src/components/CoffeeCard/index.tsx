import { ShoppingCart } from '@phosphor-icons/react'
import traditional from '../../assets/traditionalCoffee.png'
import {
  CoffeeCardContainer,
  ContainerSummary,
  ButtonContainer,
  ButtonAddShopping,
} from './styles'
import { IncrementButton } from 'components/IncrementButton'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={traditional} alt="Coffee traditional" />

      <h4>TRADICIONAL</h4>

      <strong>Expresso Tradicional</strong>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <ContainerSummary>
        <strong>9,99</strong>
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
