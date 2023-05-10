import styled from 'styled-components'

export const PayCarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background: ${(props) => props.theme.ColorBaseCard};
  border-radius: 6px;
  padding: 40px;
`

export const InfoPay = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.ColorBrandPurple};
  }

  div {
    span {
      font-size: 1rem;
      font-weight: normal;
      line-height: 21px;
      color: ${(props) => props.theme.ColorBaseSubtitle};
    }

    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 18px;
      color: ${(props) => props.theme.ColorBaseText};
    }
  }
`

export const TypeCreditCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 178.67px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;

    gap: 12px;
    padding: 16px;

    background: ${(props) => props.theme.ColorBaseButton};
    border-radius: 6px;

    svg {
      color: ${(props) => props.theme.ColorBrandPurple};
    }

    span {
      font-weight: normal;
      font-size: 12px;
      line-height: 19px;
      color: ${(props) => props.theme.ColorBaseText};
    }

    :hover {
      background: ${(props) => props.theme.ColorBaseHover};
      transition: background-color 0.4s;
    }

    :focus {
      outline: 1px solid ${(props) => props.theme.ColorBrandPurple};
      background: ${(props) => props.theme.ColorBrandPurpleLight};
    }
  }
`
