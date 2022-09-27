import React from 'react'
import * as S from './styles'
import { Box, Typography } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CreditCardIcon from '@mui/icons-material/CreditCard';

type Props = {}

export default function Cards({}: Props) {
  return (
    <>
      <S.Whapper>
        <S.Card elevation={3}>
          <Box>
            <Typography variant="h6" fontSize="16px" color="text.secondary">Saldo atual</Typography>
            <Typography variant="h4" fontSize="26px" fontWeight={600} color="text.primary">R$ 6.000,00</Typography>
          </Box>
          <S.BoxIcons bgcolor="info.main">
            <AccountBalanceIcon/>
          </S.BoxIcons>
        </S.Card>
        <S.Card elevation={3}>
          <Box>
            <Typography variant="h6" fontSize="16px" color="text.secondary">Receitas</Typography>
            <Typography variant="h4" fontSize="26px" fontWeight={600} color="text.primary">R$ 6.000,00</Typography>
          </Box>
          <S.BoxIcons bgcolor="success.main">
            <ArrowUpwardIcon/>
          </S.BoxIcons>
        </S.Card>
        <S.Card elevation={3}>
          <Box>
            <Typography variant="h6" fontSize="16px" color="text.secondary">Despesas</Typography>
            <Typography variant="h4" fontSize="26px" fontWeight={600} color="text.primary">R$ 6.000,00</Typography>
          </Box>
          <S.BoxIcons bgcolor="error.main">
            <ArrowDownwardIcon/>
          </S.BoxIcons>
        </S.Card>
        <S.Card elevation={3}>
          <Box>
            <Typography variant="h6" fontSize="16px" color="text.secondary">Cartões de crédito</Typography>
            <Typography variant="h4" fontSize="26px" fontWeight={600} color="text.primary">R$ 6.000,00</Typography>
          </Box>
          <S.BoxIcons bgcolor="info.main">
            <CreditCardIcon/>
          </S.BoxIcons>
        </S.Card>
      </S.Whapper>
    </>
  )
}