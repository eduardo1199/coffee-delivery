import { useContext, useEffect } from 'react'
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
  ContentForm,
  FormContainer,
  FormContent,
  OrderContainer,
  FormTitle,
} from './styles'
import { FormData } from './components/FormData'
import { PayTerm } from './components/PayTerm'
import { CheckoutOrder } from './components/CheckoutOrder'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductsContext } from 'context/ProductsContext'
import { useNavigate } from 'react-router-dom'
import { PaymentType } from 'types/productsType'

const newOrderCheckoutSchema = z.object({
  cep: z.string().regex(/\d{5}-\d{3}/),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  city: z.string(),
  uf: z.string().min(2).max(2),
  neighborhood: z.string(),
  payTerm: z.enum(['credit', 'debit', 'money']),
})

export type NewOrderCheckoutFormType = z.infer<typeof newOrderCheckoutSchema>

export function Checkout() {
  const {
    quantityOrderSummaryWithCartShopping,
    onSetSummaryOrders,
    onSetPaymentType,
  } = useContext(ProductsContext)

  const navigator = useNavigate()

  const newOrderForm = useForm<NewOrderCheckoutFormType>({
    resolver: zodResolver(newOrderCheckoutSchema),
  })

  function handleNewOrder(data: NewOrderCheckoutFormType) {
    if (quantityOrderSummaryWithCartShopping === 0) {
      alert('Não há produtos no carrinho')
      return
    }

    const payTerm = PaymentType[`${data.payTerm}`]

    onSetSummaryOrders([])
    onSetPaymentType(payTerm)
    navigator('/finish')
  }

  useEffect(() => {
    if (quantityOrderSummaryWithCartShopping === 0) {
      navigator('/')
    }
  }, [quantityOrderSummaryWithCartShopping, navigator])

  return (
    <>
      <Header />

      <FormProvider {...newOrderForm}>
        <ContentForm onSubmit={newOrderForm.handleSubmit(handleNewOrder)}>
          <FormContainer>
            <FormTitle>Complete seu pedido</FormTitle>
            <FormContent>
              <FormData />

              <PayTerm />
            </FormContent>
          </FormContainer>

          <FormContainer>
            <FormTitle>Cafés selecionados</FormTitle>
            <OrderContainer>
              <CheckoutOrder />
            </OrderContainer>
          </FormContainer>
        </ContentForm>
      </FormProvider>
    </>
  )
}
