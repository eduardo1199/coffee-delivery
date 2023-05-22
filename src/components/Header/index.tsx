import { useContext } from 'react'
import { Container, ButtonCart, ButtonLocale } from './styles'
import { useNavigate } from 'react-router-dom'

import { Compass, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'
import { ProductsContext } from 'context/ProductsContext'

export function Header() {
  const { quantityOrderSummaryWithCartShopping } = useContext(ProductsContext)

  const navigator = useNavigate()

  function handleNavigateToCheckout() {
    navigator('/checkout')
  }

  const isEmptyQuantityOrderSummary = quantityOrderSummaryWithCartShopping === 0

  return (
    <Container>
      <img src={logo} alt="coffee delivery" />
      <div>
        <ButtonLocale>
          <Compass size={22} />
          <span>Porto Alegre, RS</span>
        </ButtonLocale>
        <ButtonCart
          onClick={handleNavigateToCheckout}
          disabled={isEmptyQuantityOrderSummary}
        >
          <ShoppingCart size={22} />
          {!!quantityOrderSummaryWithCartShopping && (
            <span>{quantityOrderSummaryWithCartShopping}</span>
          )}
        </ButtonCart>
      </div>
    </Container>
  )
}
