import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const ContentForm = styled.form`
  max-width: 1440px;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  padding-right: 3rem;
  padding-left: 3rem;

  margin: 2.5rem auto;
`

export const FormContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const FormTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.ColorBaseSubtitle};
  margin-bottom: 3px;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 640px;
  gap: 0.75rem;
`

export const InputLocationContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  gap: 0.75rem;
`

export const OrderContainer = styled.div`
  flex: 1;

  border-radius: 6px 44px;
  background: ${(props) => props.theme.ColorBaseCard};
`
