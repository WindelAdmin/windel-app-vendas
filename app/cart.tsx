import React from "react"
import {View, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router"

export default function Cart(){
    return(
      <View className={styles.container}>
        <LinearGradient colors={['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Itens do carrinho</Text>
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
         </View>
      </View>
    )
}

const styles = {
   container: `flex-1`,
   subContainer: `flex-row gap-4 items-center`,
   header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
   containerFooter: `bg-[#FFF] h-[35%] rounded-t-3xl p-[20px]`,
   divider: `bg-[rgba(0.0.0.0.4)] h-[0.5px] mt-5`,
}