import React from 'react';
import * as S from './styles';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import PaymentIcon from '@mui/icons-material/Payment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

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
  const [age, setAge] = React.useState('');

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box display="grid" gap="20px">
      <Typography variant="h6" color="#fff">
        Despesa cartão
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
        <PaymentIcon sx={{ ...stylesIcons }} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChangeSelect}
            label="Age"
          >
            <MenuItem value={1}>Neon</MenuItem>
            <MenuItem value={2}>Nubank</MenuItem>
            <MenuItem value={3}>Click</MenuItem>
          </Select>
        </FormControl>
      </S.BoxFild>
      <S.BoxFild>
        <AccountCircle sx={{ ...stylesIcons }} />
        <Input name="value" type="number" label="Parcelas" id="installments" />
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
            label="Recebido"
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
            backgroundColor: '#26a69a',
            ':hover': { backgroundColor: '#175c56' },
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
