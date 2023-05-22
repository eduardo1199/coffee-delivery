import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  max-width: 1216px;

  margin: 0 auto;

  @media (min-width: 1600px) {
    max-width: 1350px;
  }

  @media (min-width: 1800px) {
    max-width: 1440px;
  }

  padding-left: 3rem;
  padding-right: 3rem;
`
