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
  Address,
  Form,
  FieldsContainer,
  PayCarContainer,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <Header />

      <Content>
        <FormContainer>
          <FormTitle>Complete seu pedido</FormTitle>
          <FormContent>
            <Form>
              <Address>
                <Compass size={20} />
                <div>
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </Address>
              <FieldsContainer>
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </FieldsContainer>
            </Form>
            <PayCarContainer>
              <div>
                <CurrencyDollarSimple size={22} />
                <div>
                  <span>Pagamento</span>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>

                <div>
                  <button type="button">
                    <CreditCard size={16} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </button>
                  <button type="button">
                    <Bank size={16} />
                    <span>CARTÃO DE DÉBITO</span>
                  </button>
                  <button type="button">
                    <Money size={16} />
                    <span>DINHEIRO</span>
                  </button>
                </div>
              </div>
            </PayCarContainer>
          </FormContent>
        </FormContainer>

        <OrderContainer>
          <span>Cafés selecionados</span>
        </OrderContainer>
      </Content>
    </Container>
  )
}
