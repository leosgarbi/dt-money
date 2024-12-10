import { ThemeProvider } from 'styled-components';
import { Transactions } from './pages/Transactions';
import { GlobalStyle } from './styles/gobal';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
