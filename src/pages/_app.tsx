import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'contexts/Context';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme/' 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
