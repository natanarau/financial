import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxFild = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  input {
    font-size: 15px;
    color: #fff;
    width: 100%;
    border-color: red;
    padding: 10px;
    
  }
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #999;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #777;
  }
  fieldset {
    border-color: #999;
    border-radius: 20px;
  }
  svg {
    color: #fff
  }
`;

