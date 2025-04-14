import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import { useStore } from "~/store/store";
import  NumericPad from  'react-native-numeric-pad'
import { useState, useRef } from "react";


export default function PaymentsKeyboard(){
    
    const {paymentForm} = useLocalSearchParams();
    const {setShowModalChanger} = useStore()
    const [amount, setAmount] = useState('')
    const numpadRef = useRef<any>(null)

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
         <View className="px-4">
          <NumericPad
           {...( { ref: numpadRef } as any )}
           numLength={8}
           buttonSize={95}
           activeOpacity={0.1}
           onValueChange={value => setAmount(value)}
           allowDecimal={false}
           rightBottomButton={<Ionicons name="backspace" size={28} color={'#0251BD'}/>}
           onRightBottomButtonPress={() => {numpadRef.current?.clear();}}
           buttonTextStyle={{ 
            fontWeight: 'bold', 
            fontSize: 40,
            color: "#4F4F4F"
          }} 
         />
         </View>
         <TouchableOpacity className={styles.buttonPayment} >
              <Text className={styles.textButton}>Confirmar pagamento</Text>
          </TouchableOpacity>
      </View>
    )
}


const styles = {
    container: `flex-1`,
    subContainer: `flex-row items-center`,
    header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
    containerValue: `items-center justify-center py-10 gap-1`,
    textTotal: `text-[18px] font-semibold color-gray-600`,
    value: `text-[35px] font-bold`,
    buttonPayment: `bg-[#0251BD] rounded p-[12px] mx-[20px] mt-[20px]`,
    textButton: `text-center color-[#fff] font-bold`,
}