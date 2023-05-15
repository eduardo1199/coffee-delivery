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
import { useFormContext } from 'react-hook-form'
import { NewOrderCheckoutFormType } from 'pages/Checkout'

export function FormData() {
  const { register } = useFormContext<NewOrderCheckoutFormType>()

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
        <InputCEP type="text" placeholder="CEP" {...register('cep')} />

        <InputBase type="text" placeholder="Rua" {...register('street')} />
        <InputsNumbersContainer>
          <InputBase
            type="number"
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
          />
          <InputBase
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputsNumbersContainer>
        <InputLocationContainer>
          <InputBase
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <InputBase type="text" placeholder="Cidade" {...register('city')} />
          <InputBase type="text" placeholder="UF" {...register('uf')} />
        </InputLocationContainer>
      </FieldsContainer>
    </Form>
  )
}
