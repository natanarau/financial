import * as S from './styles';
import Box from '@mui/material/Box';
import Menu from 'components/Menu';
import ModalFinance from 'components/ModalFinance';
import PopoverFinance from 'components/PopoverFinance';
import Expense from 'components/ModalFinance/Expense';
import Revenue from 'components/ModalFinance/Revenue';
import CardExpense from 'components/ModalFinance/CardExpense';
import { useModalState } from 'hooks/useModalState';

type Props = {};

export default function SideBar({}: Props) {
  const { expense, revenue, cardExpense } = useModalState()

  return (
    <S.Wrapper>
      <Box display="grid" m="0 0 20px 20px" width="150px">
        <S.BoxLogo>
          <Box component="h1" color="#fff" m="0">
            Finance
          </Box>
          <Box component="h6" color="#fff" m="0">
            by Natã Araujo
          </Box>
        </S.BoxLogo>
        <PopoverFinance />
        <ModalFinance>
         {expense && <Expense />}
         {revenue && <Revenue />}
         {cardExpense && <CardExpense />}
        </ModalFinance>
      </Box>
      <Menu />
    </S.Wrapper>
  );
}
