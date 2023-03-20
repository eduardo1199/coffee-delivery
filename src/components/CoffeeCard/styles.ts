import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  background: ${(props) => props.theme.ColorBaseCard};
  border-radius: 6px 36px;

  img {
    margin-top: -2.5rem;
  }

  h4 {
    padding: 4px 8px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    color: ${(props) => props.theme.ColorBrandYellow};
    background: ${(props) => props.theme.ColorBrandYellowLight};
    margin-bottom: 16px;
    margin-top: 12px;
  }

  strong {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 26px;
    color: ${(props) => props.theme.ColorBaseSubtitle};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme.ColorBaseLabel};
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const ContainerSummary = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 31.5px;
    color: ${(props) => props.theme.ColorBaseText};

    ::before {
      content: 'R$';
      font-weight: 400;
      font-size: 14px;
      margin-right: 5px;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;

  gap: 0.5rem;
`

export const ButtonAddOrRemoveContainer = styled.div`
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 0.5rem;
  background: ${(props) => props.theme.ColorBaseButton};
  border-radius: 6px;

  span {
    color: ${(props) => props.theme.ColorBaseTitle};
    font-weight: 400;
    font-size: 1rem;
    line-height: 21px;
  }

  button {
    width: 100%;
    border: none;
    background: transparent;

    span {
      font-size: 1.2rem;
      color: ${(props) => props.theme.ColorBrandPurple};
    }

    transition: color 0.2s;

    :hover {
      color: ${(props) => props.theme.ColorBrandPurpleDark};
    }
  }
`

export const ButtonAddShopping = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  padding: 0.5rem;
  border: none;
  color: ${(props) => props.theme.ColorBaseCard};

  background: ${(props) => props.theme.ColorBrandPurpleDark};
  transition: background-color 0.2s;
  border-radius: 6px;

  :hover {
    background: ${(props) => props.theme.ColorBrandPurple};
  }
`
