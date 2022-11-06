// import { StatusBar } from 'expo-status-bar';
// import { startTransition } from 'react';
// import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, StatusBar} from "native-base";
//o center tira a necessidade do align e do justify
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import {Loading} from './src/components/Loading'; 
import{THEME} from './src/styles/theme';
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  // garante que a fonte vai ser carregada se a pessoa não tiver ela instalada
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
          {
            fontsLoaded ? <Routes/> : <Loading/>
          }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}

//quando não ta importando do native-base usa isso
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title:{
//     color: '#FFF',
//     fontSize: 24
//   }
// });