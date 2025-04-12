import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useMemo, useRef, useCallback, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {Ionicons, Feather} from "@expo/vector-icons";
import { useStore } from '../store/store';
import ModalPayments from './ModalPayments';
import {router} from "expo-router"
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function Sales() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['15%', '30%'], []);

  const {
    showModalCharger,
    setShowModalChanger
  } = useStore()

  return (
      <BottomSheet
        ref={bottomSheetRef}
        index={0} 
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        style={{
          elevation: 10,
          shadowColor: "#000",
        }}
        backgroundStyle={{
          backgroundColor: "#F0F8FF"
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
                    <Ionicons name="cart" size={25} color={"#008000"}/>
                    <View>
                    <Text className='font-bold text-[17px]'>1 item</Text>
                    <Text>R$ 20,00</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity className={styles.bgButton} onPress={() => setShowModalChanger(true)}>
                    <Text className={styles.textButton}>Pagamento</Text>
                  </TouchableOpacity>
                </View>
                 <View className={styles.divider}></View>
                <View className='flex-row items-center'>
                  <TouchableOpacity className={styles.buttons}>
                  <Ionicons name="person-add-sharp" size={25} color={"#0251BD"}/>
                  <Text className='font-bold text-[17px]'>Clientes</Text>
                  </TouchableOpacity>
                  <View className={styles.dividerVertical}></View>
                  <TouchableOpacity className={styles.buttons}>
                  <Ionicons name="briefcase" size={25} color={"#0251BD"}/>
                  <Text className='font-bold text-[17px]'>Vendedor</Text>
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
   divider: `bg-[rgba(0.0.0.0.4)] h-[0.5px] mt-5`,
   dividerVertical: `bg-[rgba(0.0.0.0.4)] w-[0.5px] mt-5 h-[40px] mx-[10px]`,
   buttons: `flex-row items-center gap-2 mt-[5px] flex-1 py-[10px]`,
}
