import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useMemo, useRef, useCallback, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {Ionicons, Feather} from "@expo/vector-icons";
import { useStore } from '../store/store';
import ModalPayments from './ModalPayments';

export default function Sales() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['22%', '40%'], []);

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
        style={{
          elevation: 10,
          shadowColor: "#000",
        }}
      >
        <BottomSheetView style={{flex:1}}>
        <View className={styles.containerContent}>
            <View className='flex-row items-center'>
              <View className={styles.containerCart}>
                <Ionicons name="cart" size={25} color={"#008000"}/>
                <View>
                <Text className='font-bold text-[17px]'>1 item</Text>
                <Text>R$ 20,00</Text>
                </View>
              </View>
              <TouchableOpacity className={styles.bgButton} onPress={() => setShowModalChanger(true)}>
                <Text className={styles.textButton}>Cobrar</Text>
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
        </BottomSheetView>
      </BottomSheet>
  )
}

const styles = {
   containerContent: `p-[10px] mt-[15px]`,
   containerCart: `flex-row items-center gap-2 flex-1`,
   bgButton: `bg-[#0251BD] w-[50%] p-[10px] rounded`,
   textButton: `text-center color-[#fff] font-bold`,
   divider: `bg-[rgba(0.0.0.0.4)] h-[0.3px] mt-5`,
   dividerVertical: `bg-[rgba(0.0.0.0.4)] w-[0.4px] mt-5 h-[40px] mx-[10px]`,
   buttons: `flex-row items-center gap-2 mt-[5px] flex-1 py-[10px]`,
}
