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
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  min-width: 205px;
  background-color: #2C2C2E;
`
export const BoxIcons = styled(Box) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`