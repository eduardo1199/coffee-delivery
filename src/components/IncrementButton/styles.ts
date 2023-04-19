import styled from 'styled-components'

export const Container = styled.div`
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
