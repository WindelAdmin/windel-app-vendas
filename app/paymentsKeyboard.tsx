import React from "react";
import {View, Text} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import { useStore } from "~/store/store";

export default function PaymentsKeyboard(){
    
    const {paymentForm} = useLocalSearchParams();
    const {setShowModalChanger} = useStore()

    return(
      <View className={styles.container}>
          <LinearGradient colors={['#0965E5', '#0251BD']} className={styles.header}>
             <View className={styles.subContainer}>
              <Ionicons className="mr-4" name='arrow-back' color="#fff" size={25} onPress={() => {
                router.back()
                setShowModalChanger(true)
                }}/>
              <Text className="text-[20px] color-white font-semibold mr-1">Pagamento:</Text>
              <Text className="text-[20px] color-white">{paymentForm}</Text>
             </View>
         </LinearGradient>
         <View className={styles.containerValue}>
            <Text className={styles.textTotal}>Total:</Text>
            <Text className={styles.value}>R$ 20,00</Text>
         </View>
      </View>
    )
}


const styles = {
    container: `flex-1`,
    subContainer: `flex-row items-center`,
    header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
    containerValue: `items-center justify-center py-6 gap-1`,
    textTotal: `text-[18px] font-semibold color-gray-600`,
    value: `text-[35px] font-bold`
}