import { Compass } from 'phosphor-react'
import {
  Address,
  FieldsContainer,
  Form,
  InputBase,
  InputCEP,
  InputLocationContainer,
  InputsNumbersContainer,
} from './styles'

export function FormData() {
  return (
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
  )
}
