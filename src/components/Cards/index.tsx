import React from 'react'
import * as S from './styles'
type Props = {}

export default function Cards({}: Props) {
  return (
    <>
      <S.Whapper>
        <S.Card elevation={3}></S.Card>
        <S.Card elevation={3}></S.Card>
        <S.Card elevation={3}></S.Card>
        <S.Card elevation={3}></S.Card>
      </S.Whapper>
    </>
  )
}