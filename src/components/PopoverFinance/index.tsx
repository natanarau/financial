import * as React from 'react';
import * as S from './styles'
import { Box, Fab, List, ListItemButton, ListItemIcon, ListItemText, Popover } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentIcon from '@mui/icons-material/Payment';
import { useModalState } from 'hooks/useModalState';

export default function PopoverFinance() {
  const { setModalOpen, setExpense, setRevenue, setCardExpense } = useModalState()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <S.BoxButton>
        <Fab onClick={handleClick} variant="extended">
          <AddIcon />
          <S.TextButton>Novo</S.TextButton>
        </Fab>
      </S.BoxButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <S.BoxPopover>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton onClick={() => (setModalOpen(true), setExpense(true), handleClose())}>
              <ListItemIcon>
                <TrendingDownIcon id="despesa" />
              </ListItemIcon>
              <ListItemText primary="Despesa" />
            </ListItemButton>
            <ListItemButton onClick={() => (setModalOpen(true), setRevenue(true), handleClose())}>
              <ListItemIcon>
                <TrendingUpIcon id="receita" />
              </ListItemIcon>
              <ListItemText primary="Receita" />
            </ListItemButton>
            <ListItemButton onClick={() => (setModalOpen(true), setCardExpense(true), handleClose())}>
              <ListItemIcon>
                <PaymentIcon id="despesaCad" />
              </ListItemIcon>
              <ListItemText primary="Despesa cartão" />
            </ListItemButton>
          </List>
        </S.BoxPopover>
      </Popover>
    </Box>
  );
}