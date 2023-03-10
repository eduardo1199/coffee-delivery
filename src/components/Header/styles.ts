import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1120px;
  height: 104px;

  margin: auto;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    button {
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
    }

    div {
      padding: 8px;
      border-radius: 6px;
      background: ${(props) => props.theme.ColorBrandYellowLight};
      color: ${(props) => props.theme.ColorBrandYellowDark};
    }
  }
`
