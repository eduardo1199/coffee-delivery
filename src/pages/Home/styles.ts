import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  max-width: 1440px;

  padding-right: 1rem;
  padding-left: 1rem;

  margin: 5.875rem auto 6.75rem auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const SectionAbout = styled.div`
  max-width: 588px;

  h1 {
    font-weight: 800;
    line-height: 3.875rem;
    font-size: 3rem;
    color: ${(props) => props.theme.ColorBaseTitle};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.ColorBaseSubtitle};

    margin-bottom: 4.125rem;
    margin-top: 1rem;
  }
`

export const GridService = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;
`

const variantsServicesContainer = {
  ColorBrandYellowDark: '#c47f17',
  ColorBaseText: '#574f4d',
  ColorBrandYellow: '#dbac2c',
  ColorBrandPurple: '#8047f8',
} as const

type typeVariantService = keyof typeof variantsServicesContainer
interface ServiceContainerProps {
  variant: typeVariantService
}

export const ServiceContainer = styled.div<ServiceContainerProps>`
  display: flex;
  align-items: center;

  gap: 1.33rem;

  span {
    line-height: 1.31rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.ColorBaseText};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme[props.variant]};
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.ColorBaseBackground};
  }
`

export const ProductsContainer = styled.div`
  max-width: 1440px;

  margin: auto;

  padding-right: 1rem;
  padding-left: 1rem;

  h1 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 42px;
    margin-bottom: 3.4rem;
  }
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 256px);
`
