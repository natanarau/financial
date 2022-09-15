import Box from '@mui/material/Box';
import styled from "styled-components";

export const BoxButton = styled(Box) `
  button {
    width: 100%;
    border-radius: 25px;
    gap: 25px;
    padding: 10px;
    background-color: #7C4DFF;
    justify-content: flex-start;
    color: #fff;
    text-transform: none;
    font-size: 15px;
    :hover {
      background-color: #a384fb;
    }
  }
`
export const BoxPopover = styled.div`
  background-color: #fff;
  color: #2C2C2E;
  [id="despesa"] {
    color: #D04D4B;
  }
  [id="receita"] {
    color: #64B668;
  }
  [id="despesaCad"] {
    color: #26A69A;
  }
`
