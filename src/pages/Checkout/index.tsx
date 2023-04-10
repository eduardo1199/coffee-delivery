import {
  Money,
  Compass,
  CreditCard,
  Bank,
  CurrencyDollarSimple,
} from '@phosphor-icons/react'
import { Header } from '../../components/Header'

import {
  Container,
  Content,
  FormContainer,
  FormContent,
  OrderContainer,
  FormTitle,
} from './styles'
import { FormData } from './components/FormData'
import { PayTerm } from './components/PayTerm'

export function Checkout() {
  return (
    <Container>
      <Header />

      <Content>
        <FormContainer>
          <FormTitle>Complete seu pedido</FormTitle>
          <FormContent>
            <FormData />

            <PayTerm />
          </FormContent>
        </FormContainer>

        <OrderContainer>
          <span>Cafés selecionados</span>
        </OrderContainer>
      </Content>
    </Container>
  )
}
