import { Container, ButtonCart, ButtonLocale } from './styles'
import { useNavigate } from 'react-router-dom'

import { Compass, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'

export function Header() {
  const navigator = useNavigate()

  function handleNavigateToCheckout() {
    navigator('/checkout')
  }

  return (
    <Container>
      <img src={logo} alt="coffee delivery" />
      <div>
        <ButtonLocale>
          <Compass size={22} />
          <span>Porto Alegre, RS</span>
        </ButtonLocale>
        <ButtonCart onClick={handleNavigateToCheckout}>
          <ShoppingCart size={22} />
          <span>3</span>
        </ButtonCart>
      </div>
    </Container>
  )
}
