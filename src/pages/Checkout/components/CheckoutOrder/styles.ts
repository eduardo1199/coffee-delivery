import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  padding: 40px;
`

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

export const SummaryValue = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  span {
    text-align: end;
  }
`

export const Total = styled.strong`
  font-weight: bold;
  text-align: end;
  font-size: 1.25rem;
`
