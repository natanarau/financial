import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';

type MenuListProps = {
  label: string;
  urlPage: string,
  icon: JSX.Element
}

export const menuList:MenuListProps[] = [
  {
    icon: <HomeIcon />,
    label: "Home",
    urlPage: "/"
  },
  {
    icon: <CreditCardIcon />,
    label: "Cartões",
    urlPage: "/cards"
  }
]