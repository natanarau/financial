import * as S from './styles';
import { Box } from 'components/Box';
import ButtonNew from 'components/ButtonNew';
import Menu from 'components/Menu';

type Props = {};

export default function SideBar({}: Props) {
  return (
    <S.Wrapper>
      <Box display="grid" m="0 0 20px 20px">
        <S.BoxLogo>
          <Box as="h1" color="#fff" m="0">
            Finance
          </Box>
          <Box as="h6" color="#fff" m="0">
            by Natã Araujo
          </Box>
        </S.BoxLogo>
        <ButtonNew />
      </Box>
      <Menu />
    </S.Wrapper>
  );
}
