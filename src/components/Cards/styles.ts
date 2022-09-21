import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import theme from "theme/";

export const Whapper = styled(Box) `
  display: flex;
  justify-content: stretch;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
export const Card = styled(Paper) `
  width: 100%;
  height: 100px;
  background-color: #2C2C2E;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    
  }
`