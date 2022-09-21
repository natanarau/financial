import Box from '@mui/material/Box';
import styled from "styled-components";
import theme from 'theme/';

export const ListMenu = styled(Box) `
  display: flex;
  gap: 30px;
  padding: 10px 30px;
  cursor: pointer;
  transition: .3s;
  :hover{
    opacity: 50%;
  };
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    padding: 10px 15px;
  }
`
export const IconMenu = styled(Box) `
  svg {
    font-size: 25px;
  }
`
export const LabelMenu = styled(Box) `
  font-size: 18px;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: none;
  }
`