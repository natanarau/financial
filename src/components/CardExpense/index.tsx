import * as S from './styles';
import { Box, Typography } from '@mui/material';
import TableExpense from 'components/TableExpense';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type Props = {};

export default function CardExpense({}: Props) {
  return (
    <S.Whapper>
      <S.Card elevation={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          height="50px"
          bgcolor="error.main"
        >
          <Typography variant="h5">Despesas</Typography>
          <ArrowDownwardIcon />
        </Box>

        <TableExpense />
        
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          height="100px"
          bgcolor="background.grey"
        >
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5">R$ 0,00</Typography>
        </Box>
      </S.Card>
    </S.Whapper>
  );
}
