import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider, useTheme } from '~/components/Theme/ThemeProvider';


export default function Layout() {

  return (
    <GestureHandlerRootView style={{flex:1}}>
     <BottomSheetModalProvider>
      <ThemeProvider>
          <Stack
            screenOptions={{
            headerShown: false
            }} 
          >
          <Stack.Screen name='index'/>
          <Stack.Screen name='home'/>
          <Stack.Screen name='cart'/>
          <Stack.Screen name='paymentsKeyboard'/>
          <Stack.Screen name="settings"/>
        </Stack>
    </ThemeProvider>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
