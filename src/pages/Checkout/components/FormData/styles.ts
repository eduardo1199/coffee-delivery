import styled from 'styled-components'

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
