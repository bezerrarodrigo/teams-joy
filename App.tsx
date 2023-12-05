import Groups from "@screens/Groups/Groups";
import {ThemeProvider} from 'styled-components';
import defaultTheme from './src/theme/default';
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import {Loading} from "@components/Loading/Loading";

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>
  );
}

