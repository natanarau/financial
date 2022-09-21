import styled from 'styled-components';
import { Box, Switch } from '@mui/material';

export const BoxFild = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  label.Mui-focused {
    color: #26A69A;
  }
  input {
    font-size: 20px;
    color: #26A69A;
    width: 100%;
  }
  .MuiInput-underline:hover::before {
    border-bottom: 1px solid #a7a7a7;
  }
  .MuiInput-underline::before {
    border-bottom: 1px solid #878787;
  }
  label {
    font-size: 18px;
    color: #878787;
  }
  .MuiFormControl-root {
    width: 100%;
    margin: 0;
  }
`;
export const SwitchForm = styled(Switch) `
  .MuiSwitch-switchBase.Mui-checked {
    color: #26A69A
  }
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #26A69A
  }
`