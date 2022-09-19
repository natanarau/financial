import styled from 'styled-components';
import { Box } from '@mui/material';

export const BoxFild = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  label.Mui-focused {
    color: #64b668;
  }
  input {
    font-size: 20px;
    color: #64b668;
    width: 100%;
  }
  .MuiInput-underline:after {
    border-bottom-color: #64b668;
  }
`;
