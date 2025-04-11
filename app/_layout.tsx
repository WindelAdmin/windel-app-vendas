import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
     <BottomSheetModalProvider>
     <StatusBar barStyle="light-content" backgroundColor="#0965E5"  />
      <Stack
        screenOptions={{
         headerShown: false
        }} 
      >
      <Stack.Screen name='index'/>
      <Stack.Screen name='home'/>
      <Stack.Screen name='cart'/>
    </Stack>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
