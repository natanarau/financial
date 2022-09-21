import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import theme from "theme/";

export const Whapper = styled(Box) `
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
export const Card = styled(Paper) `
  width: 100%;
  height: 400px;
  background-color: #2C2C2E;
`