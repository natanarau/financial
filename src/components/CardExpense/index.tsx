import { Box } from '@mui/material'
import * as S from './styles'

type Props = {}

export default function CardExpense({}: Props) {
  return (
    <S.Whapper >
      <S.Card elevation={3}></S.Card>
      <S.Card elevation={3}></S.Card>
    </S.Whapper>
  )
}