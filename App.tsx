import Groups from "@screens/Groups/Groups";
import {ThemeProvider} from 'styled-components';
import defaultTheme from './src/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Groups/>
    </ThemeProvider>
  );
}

