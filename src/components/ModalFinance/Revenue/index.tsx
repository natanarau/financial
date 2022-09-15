import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {};

export default function Revenue({}: Props) {
  return (
    <Box display="flex">
      <Typography variant="h6" color="#fff">
        Nova receita
      </Typography>
    </Box>
  );
}
