import { Header } from 'components/Header'
import { Container, Content, Summary, SummaryData, Info } from './styles'

import MotorImg from 'assets/motorcycle.svg'

import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ProductsContext } from 'context/ProductsContext'

export function FinishOrder() {
  const { infoOrder } = useContext(ProductsContext)

  return (
    <>
      <Header />

      <Content>
        <Summary>
          <span>Uhu! Pedido confirmado</span>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <SummaryData>
            <Info>
              <div>
                <MapPin />
              </div>
              <span>
                Entrega em Rua <strong>João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </span>
            </Info>
            <Info>
              <div>
                <Timer />
              </div>
              <span>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </span>
            </Info>
            <Info>
              <div>
                <CurrencyDollar />
              </div>
              <span>
                Pagamento na entrega <strong>{infoOrder}</strong>
              </span>
            </Info>
          </SummaryData>
        </Summary>
        <img src={MotorImg} alt="motorcycle" />
      </Content>
    </>
  )
}
