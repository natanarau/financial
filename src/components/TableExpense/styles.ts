import styled from "styled-components";
import { Box } from "@mui/material";
import theme from "theme/";

export const Whapper = styled(Box) `
  overflow: scroll;
  border-radius: 20px;
  height: 400px;
  ::-webkit-scrollbar {
    width: 0px;
}
  .MuiTableRow-root {
    height: 50px;
  }
  .MuiTableRow-root:nth-child(even) {
    background-color: ${theme.palette.grey[800]}
  }
`
