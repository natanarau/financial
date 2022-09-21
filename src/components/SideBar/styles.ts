import Box from '@mui/material/Box';
import styled from "styled-components";
import theme from 'theme/';

export const Wrapper = styled(Box) `
  width: 205px;
  height: 100vh;
  background-color: #2C2C2E;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    width: 62px;
  }
`
export const BoxLogo = styled(Box) `
  display: grid;
  justify-items: flex-start;
  align-content: center;
  margin-left: 10px;
  height: 100px;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: none;
  }
`