import React from "react"
import {View, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router"

export default function Cart(){
    return(
      <View>
        <LinearGradient colors={['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Itens do carrinho</Text>
          </View>
        </LinearGradient>
         <Text>Lista de produtos no carrinho</Text>
      </View>
    )
}

const styles = {
   container: `flex-1`,
   subContainer: `flex-row gap-4 items-center`,
   header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
}