import { TextFieldProps } from '@mui/material'
import * as S from './styled'

export default function Input(props: TextFieldProps) {
  return (
    <S.InputForm {...props} variant="standard" />
  )
}