import Box from '@mui/material/Box';
import styled from "styled-components";

export const WhapperModal = styled(Box) `
  background-color: #2C2C2E;
  position: absolute;
  min-width: 300px;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 25px;
  [data-testid="CloseIcon"] {
    position: absolute;
    right: 0;
    margin: 20px;
    cursor: pointer;
  }
  svg {
    color: #878787;
  }
`