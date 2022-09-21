import * as React from 'react';
import * as S from './styles'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ptBR from 'dayjs/locale/pt-br';


export default function ViewsDatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <S.BoxFild>
       <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBR}>
        <DatePicker
          views={['month', 'year' ]}
          minDate={dayjs('2012-03-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
    </S.BoxFild>
   
  );
}