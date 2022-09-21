import { TextField } from "@mui/material";
import styled from "styled-components";

export const InputForm = styled(TextField) `
  width: 100%;
 .MuiInput-underline:hover::before {
      border-bottom: 1px solid #a7a7a7;
  }
 .MuiInput-underline::before {
    border-bottom: 1px solid #878787;
  }
  label {
    font-size: 18px;
    color: #878787
  }
`
