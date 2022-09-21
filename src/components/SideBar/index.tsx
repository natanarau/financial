import React from 'react';
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
  const { expense, revenue, cardExpense, sideBarState } = useModalState();

  return (
    <S.Wrapper
      sx={{
        position: `${!sideBarState ? 'absolute' : 'block'}`,
        left: `${sideBarState ? '0' : '-100%'}`,
        transition: '.5s',
      }}
    >
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
      <Menu />
    </S.Wrapper>
  );
}
