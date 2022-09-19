import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import * as S from './styles';
import Input from 'components/Input';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import ptBR from 'dayjs/locale/pt-br';

const stylesIcons = {
  color: 'action.active',
  mr: 1,
  my: 0.5,
  width: '30px',
  height: '30px',
};

export default function ModalExpense() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <Box display="grid" gap="20px">
      <Typography variant="h6" color="#fff">
        Nova despesa
      </Typography>
      <S.BoxFild>
        <DescriptionIcon sx={{ ...stylesIcons }} />
        <Input name="description" type="text" label="Descrição" id="value" />
      </S.BoxFild>
      <S.BoxFild>
        <AccountCircle sx={{ ...stylesIcons }} />
        <Input name="value" type="text" label="Valor" id="value" />
      </S.BoxFild>
      <S.BoxFild>
        <Box display="flex" alignItems="center !important">
          <TaskAltIcon sx={{ ...stylesIcons }} />
          <Typography variant="subtitle1" fontSize="15px" color="#878787">
            Foi paga
          </Typography>
        </Box>
        <S.SwitchForm name="pay" />
      </S.BoxFild>
      <S.BoxFild>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBR}>
          <CalendarMonthIcon sx={{ ...stylesIcons }} />
          <DesktopDatePicker
            label="Vencimento"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <Input {...params} />}
          />
        </LocalizationProvider>
      </S.BoxFild>
      <Box display="grid" justifyContent="end" mt="20px">
        <Button
          sx={{
            backgroundColor: '#ef5350',
            ':hover': { backgroundColor: '#b61827' },
            color: '#fff',
            width: '160px',
            borderRadius: '20px',
          }}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
}
