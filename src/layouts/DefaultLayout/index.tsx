import { Container, Content } from './styles'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
