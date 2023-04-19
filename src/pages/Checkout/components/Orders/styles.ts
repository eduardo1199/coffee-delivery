import styled from 'styled-components'

export const OrderInfo = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
`
export const OrderType = styled.div`
  display: flex;

  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.ColorBaseSubtitle};
    margin-bottom: 0.5rem;
  }
`

export const ContainerButtons = styled.div`
  display: flex;

  gap: 0.5rem;

  button[type='button'] {
    display: flex;
    align-items: center;

    gap: 4px;
    border: none;
    padding: 0.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme.ColorBaseButton};

    svg {
      color: ${(props) => props.theme.ColorBrandPurple};
    }

    :hover {
      background: ${(props) => props.theme.ColorBaseHover};
      transition: background-color 0.4s;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.ColorBaseButton};
`
