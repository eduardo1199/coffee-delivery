import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'
import { InfoPay, PayCarContainer, TypeCreditCard } from './styles'

export function PayTerm() {
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
  )
}
