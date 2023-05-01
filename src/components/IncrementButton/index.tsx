import { useState } from 'react'
import { Container } from './styles'

interface IncrementButtonProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}

export function IncrementButton(props: IncrementButtonProps) {
  return (
    <Container>
      <button onClick={props.onDecrement}>
        <span>-</span>
      </button>
      <span>{props.quantity}</span>
      <button onClick={props.onIncrement}>
        <span>+</span>
      </button>
    </Container>
  )
}
