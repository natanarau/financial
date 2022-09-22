import { Box } from '@mui/material'
import TableExpense from 'components/TableExpense'
import * as S from './styles'

type Props = {}

export default function CardExpense({}: Props) {
  return (
    <S.Whapper >
      <S.Card elevation={3}>
        <TableExpense />
      </S.Card>
      <S.Card elevation={3}></S.Card>
    </S.Whapper>
  )
}