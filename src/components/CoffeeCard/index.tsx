import { ShoppingCart } from '@phosphor-icons/react'
import traditional from '../../assets/traditionalCoffee.png'
import {
  CoffeeCardContainer,
  ContainerSummary,
  ButtonContainer,
  ButtonAddOrRemoveContainer,
  ButtonAddShopping,
} from './styles'

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
          <ButtonAddOrRemoveContainer>
            <button>
              <span>-</span>
            </button>
            <span>1</span>
            <button>
              <span>+</span>
            </button>
          </ButtonAddOrRemoveContainer>
          <ButtonAddShopping>
            <ShoppingCart />
          </ButtonAddShopping>
        </ButtonContainer>
      </ContainerSummary>
    </CoffeeCardContainer>
  )
}
