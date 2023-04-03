import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  max-width: 1440px;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding-right: 1rem;
  padding-left: 1rem;

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
`

export const Form = styled.div`
  flex: 1;
  background: ${(props) => props.theme.ColorBaseCard};
  padding: 40px;
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

export const FieldsContainer = styled.div`
  display: grid;
  grid-template-row: 200px;
`

export const PayCarContainer = styled.div``

export const OrderContainer = styled.div``
