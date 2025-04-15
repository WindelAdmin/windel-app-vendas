import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useMemo, useRef, useCallback, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {Ionicons, Feather} from "@expo/vector-icons";
import { useStore } from '../store/store';
import ModalPayments from './ModalPayments';
import {router} from "expo-router"
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from "~/components/Theme/ThemeProvider";

export default function Sales() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['15%', '30%'], []);

  const {
    showModalCharger,
    setShowModalCharger
  } = useStore();

  const { theme } = useTheme();

  return (
      <BottomSheet
        ref={bottomSheetRef}
        index={0} 
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        handleIndicatorStyle={{
          backgroundColor: theme === 'dark' ? '#fff' : '#000'
        }}
        style={{
          elevation: 10,
          shadowColor: "#000",
        }}
        backgroundStyle={{
          backgroundColor: `${theme == "dark" ? "#1C1C1C" : "#F0F8FF"}`
        }}
      >

        <BottomSheetView style={{flex:1}} >
         <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
          >
          <View className={styles.containerContent}>
                <View className='flex-row items-center'>
                  <TouchableOpacity className={styles.containerCart} onPress={() => router.push("/cart")}>
                    <Ionicons name="cart" size={25} color={theme == "dark" ? "#00FF00" : "#008000"}/>
                    <View>
                      <Text className={theme == "dark" ? `font-bold text-[17px] text-white` : 'font-bold text-[17px]'}>1 item</Text>
                      <Text className={theme == "dark" ? `text-[17px] text-white` : 'text-[17px]'}>R$ 20,00</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity 
                   className={theme == "dark" ? `bg-[#4682B4] w-[50%] p-[10px] rounded` 
                   : `bg-[#0251BD] w-[50%] p-[10px] rounded`} onPress={() => setShowModalCharger(true)}>
                    <Text className={styles.textButton}>Pagamento</Text>
                  </TouchableOpacity>
                </View>
                 <View 
                 className={theme == "dark" ? `bg-[#fff] h-[0.5px] mt-5` 
                 : `bg-[rgba(0.0.0.0.4)] h-[0.5px] mt-5`}></View>

                <View className='flex-row items-center'>
                  <TouchableOpacity className={styles.buttons}>
                    <Ionicons name="person-add-sharp" size={25} color={theme == "dark" ? "#4682B4" : "#0251BD"}/>
                    <Text className={
                      theme == "dark" ? "font-bold text-[17px] text-white" 
                      : 'font-bold text-[17px]'}>
                        Clientes
                    </Text>
                  </TouchableOpacity>

                  <View className={
                    theme == "dark" ? `bg-[#fff] w-[0.5px] mt-5 h-[40px] mx-[10px]`
                    : `bg-[rgba(0.0.0.0.4)] w-[0.5px] mt-5 h-[40px] mx-[10px]`}></View>

                  <TouchableOpacity className={styles.buttons}>
                    <Ionicons name="briefcase" size={25} color={theme == "dark" ? "#4682B4" : "#0251BD"}/>
                    <Text className={
                      theme == "dark" ? "font-bold text-[17px] text-white" 
                      : 'font-bold text-[17px]'}>
                        Vendedor
                    </Text>
                  </TouchableOpacity>
                </View>

            </View>
               <Modal visible={showModalCharger} transparent={true}>
                 <ModalPayments/>
               </Modal>
           </KeyboardAvoidingView>
        </BottomSheetView>
      </BottomSheet>
  )
}

const styles = {
   containerContent: `p-[10px] mt-[5px]`,
   containerCart: `flex-row items-center gap-2 flex-1`,
   bgButton: `bg-[#0251BD] w-[50%] p-[10px] rounded`,
   textButton: `text-center color-[#fff] font-bold`,
   buttons: `flex-row items-center gap-2 mt-[5px] flex-1 py-[10px]`,
}
