import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import {
  InfoPay,
  PayCarContainer,
  PayTermButton,
  TypeCreditCard,
} from './styles'
import { useFormContext, Controller } from 'react-hook-form'
import { NewOrderCheckoutFormType } from 'pages/Checkout'

export function PayTerm() {
  const { control, setValue } = useFormContext<NewOrderCheckoutFormType>()

  return (
    <PayCarContainer>
      <InfoPay>
        <CurrencyDollarSimple size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </InfoPay>

      <Controller
        control={control}
        name="payTerm"
        render={(props) => {
          return (
            <TypeCreditCard>
              <PayTermButton
                type="button"
                isActive={props.field.value === 'credit'}
                onClick={() => setValue('payTerm', 'credit')}
              >
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </PayTermButton>
              <PayTermButton
                type="button"
                isActive={props.field.value === 'debit'}
                onClick={() => setValue('payTerm', 'debit')}
              >
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </PayTermButton>
              <PayTermButton
                type="button"
                isActive={props.field.value === 'money'}
                onClick={() => setValue('payTerm', 'money')}
              >
                <Money size={16} />
                <span>DINHEIRO</span>
              </PayTermButton>
            </TypeCreditCard>
          )
        }}
      />
    </PayCarContainer>
  )
}
