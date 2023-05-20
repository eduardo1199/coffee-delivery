import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 80px;

  padding-right: 3rem;
  padding-left: 3rem;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;

  span {
    color: ${(props) => props.theme.ColorBrandYellowDark};
    font-size: 2rem;
    line-height: 42px;
    font-weight: 800;
  }

  p {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: ${(props) => props.theme.ColorBaseSubtitle};
  }
`

export const SummaryData = styled.div`
  display: flex;
  justify-content: start;

  flex-direction: column;
  gap: 2rem;

  margin-top: 40px;

  box-sizing: border-box;
  padding: 40px;

  border-image: linear-gradient(#dbac2c, #8047f8) 30;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px 36px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  div {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: ${(props) => props.theme.ColorBrandPurple};

    svg {
      font-size: 18px;
      color: ${(props) => props.theme.ColorBaseWhite};
    }
  }

  span {
    font-size: 16px;
    color: ${(props) => props.theme.ColorBaseText};
    font-weight: 400;

    strong {
      font-weight: 700;
    }
  }
`
