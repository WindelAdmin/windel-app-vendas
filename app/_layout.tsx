import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar} from "react-native"

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0965E5"  />
      <Stack
        screenOptions={{
         headerShown: false
        }} 
      >
      <Stack.Screen name='index'/>
      <Stack.Screen name='home'/>
    </Stack>
    </>
  )
}
