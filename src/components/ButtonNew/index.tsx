import * as S from './styles'
import AddIcon from '@mui/icons-material/Add';

type Props = {}

export default function ButtonNew({}: Props) {
  return (
    <>
      <S.ButtonAdd as="button"><AddIcon/>Novo</S.ButtonAdd>
    </>
  )
}