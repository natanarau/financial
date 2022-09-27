import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import theme from "theme/";

export const Whapper = styled(Box) `
  display: grid;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
export const Card = styled(Paper) `
  overflow: hidden;
  width: 100%;
  max-height: 600px;
  background-color: #2C2C2E;
`