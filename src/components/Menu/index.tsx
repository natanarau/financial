import * as S from './styles';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { menuList } from './menu.tab';
import { useRouter } from 'next/router';

export default function Menu() {
  const { pathname } = useRouter();
  
  return (
    <Box display="grid">
      {menuList.map((e, i) => (
        <Link href={e.urlPage} key={i}>
          <S.ListMenu
            color={pathname === e.urlPage ? '#7C4DFF' : '#D5D5D6'}
            borderLeft={`${pathname === e.urlPage && '3px solid #7C4DFF'}`}
          >
            <S.IconMenu>{e.icon}</S.IconMenu>
            <S.LabelMenu>{e.label}</S.LabelMenu>
          </S.ListMenu>
        </Link>
      ))}
    </Box>
  );
}
