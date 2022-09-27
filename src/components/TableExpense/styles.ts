import styled from "styled-components";
import { Box } from "@mui/material";
import theme from "theme/";

export const Whapper = styled(Box) `
  max-height: 400px;
  overflow: auto;
  ::-webkit-scrollbar {
    width:10px
  }   
  ::-webkit-scrollbar {
    width:10px
  }   
  ::-webkit-scrollbar-track {
    background-color: ${theme.palette.grey[500]};
  }   
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.grey[700]};
  }      
  ::-webkit-scrollbar-corner {
    background-color: #999;
  }   
  .MuiTableRow-root {
    height: 50px;
  }
  .MuiTableRow-root:nth-child(even) {
    background-color: ${theme.palette.grey[800]}
  }
  .MuiTableContainer-root {
    overflow-x: none;
  }
`
