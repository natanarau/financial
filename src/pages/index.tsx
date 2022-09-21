import React from 'react';
import SideBar from 'components/SideBar';
import { Box, Container, Typography } from '@mui/material';
import Month from 'components/Month';
import Cards from 'components/Cards';
import CardExpense from 'components/CardExpense';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useModalState } from 'hooks/useModalState';

export default function Home() {
  const { sideBarState, setSideBarState } = useModalState()

  return (
    <Box display="flex">
      <SideBar />
      <Container maxWidth="xl">
        <Box display="grid" gap="15px" mt="10px">
          <Box
            bgcolor="#7C4DFF"
            width="30px"
            height="30px"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#fff"
            onClick={() => setSideBarState(!sideBarState)}
          >
            {!sideBarState ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
          </Box>
          <Box display="flex" justifyContent="center">
            <Month />
          </Box>
          <Typography variant="h5" fontWeight={600} color="#fff">
            Dashboard
          </Typography>
        </Box>
        <Cards />
        <CardExpense />
      </Container>
    </Box>
  );
}
