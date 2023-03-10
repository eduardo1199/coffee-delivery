import { Container } from './styles'

import { Compass, ShoppingCart } from '@phosphor-icons/react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="coffee delivery" />
      <div>
        <button>
          <Compass size={22} />
          <span>Porto Alegre, RS</span>
        </button>
        <div>
          <ShoppingCart size={22} />
        </div>
      </div>
    </Container>
  )
}
