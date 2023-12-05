import Groups from "@screens/Groups/Groups";
import {ThemeProvider} from 'styled-components';
import defaultTheme from './src/theme/default';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import {ActivityIndicator} from "react-native";

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Groups/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}

