import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1440px;
  height: 104px;

  margin: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
export const ButtonLocale = styled.button`
  border: none;
  padding: 8px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 143px;
  height: 38px;
  background: ${(props) => props.theme.ColorBrandPurpleLight};
  border-radius: 6px;
  color: ${(props) => props.theme.ColorBrandPurpleDark};

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`

export const ButtonCart = styled.button`
  border: none;
  padding: 8px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  position: relative;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.ColorBrandYellowLight};
  color: ${(props) => props.theme.ColorBrandYellowDark};

  span {
    padding: 2px 6px;
    border-radius: 50%;
    background: ${(props) => props.theme.ColorBrandYellowDark};
    color: ${(props) => props.theme.ColorBaseWhite};
    position: absolute;
    top: -12px;
    right: -5px;
  }

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`
