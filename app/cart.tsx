import React from "react"
import {View, Text , TouchableOpacity, Modal} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import ModalPayments from "~/components/ModalPayments";
import { useStore } from '../store/store';

export default function Cart(){

   const {
      showModalCharger,
      setShowModalChanger
    } = useStore()

    return(
      <View className={styles.container}>
        <LinearGradient colors={['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Carrinho</Text>
          </View>
        </LinearGradient>
        <View className="flex-1">
          
        </View>
         <View className={styles.containerFooter} 
           style={{
            elevation: 30, 
            shadowColor: '#000',
            }}>
            <Text className="self-end text-[18px] font-bold">Total: R$ 20,00</Text>
            <View className={styles.divider}></View>
            <View className={styles.containerButtons}>
              <TouchableOpacity className={styles.buttonDiscount}>
                <Ionicons name="remove-circle" size={25} color={"#0251BD"}/>
                <View>
                  <Text className={styles.textTitleButtons}>Desconto</Text>
                  <Text className="font-medium color-red-500">R$ 0,00 (%)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className={styles.buttonDiscount}>
                <Ionicons name="add-circle" size={25} color={"#0251BD"}/>
                <View>
                  <Text className={styles.textTitleButtons}>Adicional</Text>
                  <Text className="font-medium color-green-600">R$ 0,00 (%)</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className={styles.buttonPayment} onPress={() => setShowModalChanger(true)}>
              <Text className={styles.textButton}>Pagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity className={styles.buttonCancelSale}>
              <Text className={styles.textButtonCancelSale}>Cancelar venda</Text>
            </TouchableOpacity>
            <Modal visible={showModalCharger} transparent={true}>
               <ModalPayments/>
            </Modal>
         </View>
      </View>
    )
}

const styles = {
   container: `flex-1`,
   subContainer: `flex-row gap-4 items-center`,
   header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
   containerFooter: `bg-[#FFF] h-[35%] rounded-t-3xl py-[10px] px-[15px]`,
   divider: `bg-[rgba(0.0.0.0.4)] h-[0.5px] mt-5`,
   buttonDiscount: `flex-row items-center gap-2 w-[50%]`,
   containerButtons: `flex-row py-[10px] my-[10px]`,
   textTitleButtons: `text-[17px] font-bold`,
   buttonPayment: `bg-[#0251BD] rounded p-[12px]`,
   textButton: `text-center color-[#fff] font-bold`,
   buttonCancelSale: `p-[12px] rounded border border-[#DC143C] border-[2px] mt-[10px]`,
   textButtonCancelSale: `color-[#DC143C] font-bold text-center`
}