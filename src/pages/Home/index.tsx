import { Header } from '../../components/Header'
import {
  Container,
  Content,
  GridService,
  SectionAbout,
  ServiceContainer,
  ProductsContainer,
  CoffeeContainer,
} from './styles'

import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

import CoffeeImg from '../../assets/coffee.svg'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <SectionAbout>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <GridService>
            <ServiceContainer variant="ColorBrandYellowDark">
              <div>
                <ShoppingCart />
              </div>
              <span>Compra simples e segura</span>
            </ServiceContainer>
            <ServiceContainer variant="ColorBaseText">
              <div>
                <Package />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </ServiceContainer>
            <ServiceContainer variant="ColorBrandYellow">
              <div>
                <Timer />
              </div>
              <span>Entrega rápida e rastreada</span>
            </ServiceContainer>
            <ServiceContainer variant="ColorBrandPurple">
              <div>
                <Coffee />
              </div>
              <span>O café chega fresquinho até você</span>
            </ServiceContainer>
          </GridService>
        </SectionAbout>
        <img src={CoffeeImg} alt="" />
      </Content>

      <ProductsContainer>
        <h1>Nossos cafés</h1>

        <CoffeeContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeContainer>
      </ProductsContainer>
    </Container>
  )
}
