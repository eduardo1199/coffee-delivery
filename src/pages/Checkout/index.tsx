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
  InputCEP,
  InputsNumbersContainer,
  InputLocationContainer,
  InputBase,
  InfoPay,
  TypeCreditCard,
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
                <InputCEP type="text" placeholder="CEP" />

                <InputBase type="text" placeholder="Rua" />
                <InputsNumbersContainer>
                  <InputBase type="number" placeholder="Número" />
                  <InputBase type="text" placeholder="Complemento" />
                </InputsNumbersContainer>
                <InputLocationContainer>
                  <InputBase type="text" placeholder="Bairro" />
                  <InputBase type="text" placeholder="Cidade" />
                  <InputBase type="text" placeholder="UF" />
                </InputLocationContainer>
              </FieldsContainer>
            </Form>
            <PayCarContainer>
              <InfoPay>
                <CurrencyDollarSimple size={22} />
                <div>
                  <span>Pagamento</span>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </InfoPay>

              <TypeCreditCard>
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
              </TypeCreditCard>
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
