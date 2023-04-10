import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  max-width: 1440px;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding-right: 3rem;
  padding-left: 3rem;

  margin: 2.5rem auto;
`

export const FormContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 12px;
`

export const FormTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.ColorBaseSubtitle};
  margin-bottom: 3px;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;

  width: 640px;
  gap: 0.75rem;
`

export const Form = styled.div`
  flex: 1;
  background: ${(props) => props.theme.ColorBaseCard};
  padding: 40px;
  border-radius: 6px;
`

export const Address = styled.div`
  display: flex;

  align-items: start;
  gap: 8px;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.ColorBrandYellow};
  }

  span {
    font-size: 16px;
    line-height: 21px;
    color: ${(props) => props.theme.ColorBaseSubtitle};
    font-weight: normal;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.ColorBaseText};
    font-weight: normal;
  }
`

export const InputBase = styled.input`
  height: 42px;
  padding: 12px;

  background: ${(props) => props.theme.ColorBaseInput};
  border: 1px solid ${(props) => props.theme.ColorBaseButton};

  border-radius: 4px;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.ColorBaseText};

  :focus {
    border: 1px solid ${(props) => props.theme.ColorBrandYellowDark};
  }
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputCEP = styled(InputBase)`
  max-width: 200px;
`

export const InputsNumbersContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0.875rem;
`

export const InputLocationContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  gap: 0.75rem;
`

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
  }
`

export const OrderContainer = styled.div``
