import Box from '@mui/material/Box';
import styled from "styled-components";

export const ListMenu = styled(Box) `
  display: flex;
  gap: 40px;
  padding: 10px 40px;
  cursor: pointer;
  transition: .3s;
  :hover{
    opacity: 50%;
  };
`
export const IconMenu = styled(Box) `
  svg {
    font-size: 25px;
  }
`
export const LabelMenu = styled(Box) `
   font-size: 18px;
`