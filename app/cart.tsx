import React from "react"
import {View, Text , TouchableOpacity, Modal} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import ModalPayments from "~/components/ModalPayments";
import { useStore } from '../store/store';
import { useTheme } from "~/components/Theme/ThemeProvider";

export default function Cart(){

    const {
      showModalCharger,
      setShowModalCharger
    } = useStore()
    const { theme } = useTheme();

    return(
      <View className={theme == "dark" ? "flex-1 bg-gray-900" : "flex-1 "}>
        <LinearGradient colors={theme == "dark" ? ['#1C1C1C', '#1C1C1C'] : ['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Carrinho</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1.8}}>
          
        </View>
         <View 
         className={
          theme == "dark" ? "bg-[#1C1C1C] rounded-t-3xl py-[10px] px-[15px] flex-1" 
          : `bg-[#FFF] rounded-t-3xl py-[10px] px-[15px] flex-1`} 
          
           style={{
            elevation: 30, 
            shadowColor: '#000',
            }}>

            <Text 
            className={theme == "dark" ? "self-end text-[18px] font-bold text-white" 
            : "self-end text-[18px] font-bold"}>
              Total: R$ 20,00
            </Text>

            <View className={
              theme == "dark" ? "bg-[#fff] h-[0.5px] mt-5" 
              :`bg-[rgba(0.0.0.0.4)] h-[0.5px] mt-5`}></View>

            <View className={styles.containerButtons}>
              <TouchableOpacity className={styles.buttonDiscount}>
                <Ionicons name="remove-circle" size={25} color={theme == "dark" ? "#4682B4" : "#0251BD"}/>
                <View>
                  <Text 
                   className={theme == "dark" ? "text-[17px] font-bold text-white" 
                   :`text-[17px] font-bold`}>
                    Desconto
                  </Text>
                  <Text 
                   className={theme == "dark" ? "font-medium text-[#FF4500]" 
                   :"font-medium color-red-500"}>
                    R$ 0,00 (%)
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className={styles.buttonDiscount}>
                <Ionicons name="add-circle" size={25} color={theme == "dark" ? "#4682B4" : "#0251BD"}/>
                <View>
                  <Text 
                   className={theme == "dark" ? "text-[17px] font-bold text-white" 
                   :`text-[17px] font-bold`}>
                    Adicional
                  </Text>
                  <Text 
                   className={theme == "dark" ? "font-medium text-[#00FF00]" 
                   : "font-medium color-green-600"}>
                    R$ 0,00 (%)
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className={theme == "dark" ? "bg-[#4682B4] rounded p-[12px]" :"bg-[#0251BD] rounded p-[12px]"} onPress={() => setShowModalCharger(true)}>
              <Text className={styles.textButton}>Pagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             className={
              theme == "dark" ? "p-[12px] rounded border-[#FF4500] border-[2px] mt-[10px]" 
             :`p-[12px] rounded border-[#DC143C] border-[2px] mt-[10px]`}>
              <Text 
               className={
                theme == "dark" ? "color-[#FF4500] font-bold text-center" 
                :`color-[#DC143C] font-bold text-center`}>
                  Cancelar venda
              </Text>
            </TouchableOpacity>
            <Modal visible={showModalCharger} transparent={true}>
               <ModalPayments/>
            </Modal>
         </View>
      </View>
    )
}

const styles = {
   subContainer: `flex-row gap-4 items-center`,
   header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
   buttonDiscount: `flex-row items-center gap-2 w-[50%]`,
   containerButtons: `flex-row py-[10px] my-[10px]`,
   textButton: `text-center color-[#fff] font-bold`,
}