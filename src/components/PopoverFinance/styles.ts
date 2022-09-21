import Box from '@mui/material/Box';
import styled from "styled-components";
import theme from 'theme/';

export const BoxButton = styled(Box) `
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
  button {
    width: 150px;
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
    };
    @media (max-width: ${theme.breakpoints.values.lg}px) {
      width: 0;
      justify-content: center;
      margin-left: 0;
    }
  }
`
export const BoxPopover = styled.div`
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
export const TextButton = styled.span`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: none;
  }
`
