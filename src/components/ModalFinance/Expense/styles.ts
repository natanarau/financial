import styled from "styled-components";
import { Box, Switch } from "@mui/material";

export const BoxFild = styled(Box) `
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  label.Mui-focused {
    color: #EF5350
  }
  input {
    font-size: 20px;
    color: #EF5350;
    width: 100%;
  }
  .MuiInput-underline:after {
    border-bottom-color: #EF5350
  }
`
export const SwitchForm = styled(Switch) `
  .MuiSwitch-switchBase.Mui-checked {
    color: #EF5350
  }
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #EF5350
  }
`