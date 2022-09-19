import React from 'react';
import SideBar from 'components/SideBar';
import { Box, Container, Typography } from '@mui/material';
import Month from 'components/Month';
import Cards from 'components/Cards';
import CardExpense from 'components/CardExpense';

export default function Home() {
  return (
    <Box display="flex">
      <SideBar />
      <Container>
        <Box display="grid" gap="15px" mt="10px">
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
