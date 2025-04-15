import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import { useStore } from "~/store/store";
import  NumericPad from  'react-native-numeric-pad'
import { useState, useRef } from "react";
import { useTheme } from "~/components/Theme/ThemeProvider";


export default function PaymentsKeyboard(){
    
    const {paymentForm} = useLocalSearchParams();
    const {setShowModalCharger: setShowModalChanger} = useStore();
    const [amount, setAmount] = useState('');
    const numpadRef = useRef<any>(null);
    const { theme } = useTheme();

    return(
      <View className={theme == "dark" ? "flex-1 bg-gray-900 pb-[15px]" : "flex-1 pb-[15px]"}>
          <LinearGradient colors={theme == "dark" ? ['#1C1C1C', '#1C1C1C'] : ['#0965E5', '#0251BD']} className={styles.header}>
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
            <Text 
              className={
                theme == "dark" ? `text-[18px] font-semibold text-gray-400` 
                : `text-[18px] font-semibold color-gray-600`}>
                  Total:
            </Text>
            <Text className={theme == "dark" ? `text-white font-bold text-[35px]` : `text-[35px] font-bold`}>R$ 20,00</Text>
         </View>
         <View className="px-4 flex-1">
            <NumericPad
            {...( { ref: numpadRef } as any )}
            numLength={8}
            buttonSize={80}
            activeOpacity={0.1}
            onValueChange={value => setAmount(value)}
            allowDecimal={false}
            rightBottomButton={<Ionicons name="backspace" size={40} color={ theme == "dark" ? "#4682B4" : '#0251BD'}/>}
            onRightBottomButtonPress={() => {numpadRef.current?.clear();}}
            buttonTextStyle={{ 
              fontWeight: 'bold', 
              fontSize: 40,
              color: `${theme == "dark" ? "#D3D3D3" : "#4F4F4F"}`,
            }} 
          />
         </View>
         <TouchableOpacity className={theme == "dark" ? "bg-[#4682B4] rounded mx-[20px] py-[12px]" : `bg-[#0251BD] rounded mx-[20px] py-[12px]`} >
              <Text className={styles.textButton}>Confirmar pagamento</Text>
         </TouchableOpacity>
      </View>
    )
}


const styles = {
    subContainer: `flex-row items-center`,
    header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
    containerValue: `items-center justify-center py-8 gap-1`,
    value: `text-[35px] font-bold`,
    buttonPayment: `bg-[#0251BD] rounded mx-[20px] py-[12px]`,
    textButton: `text-center color-[#fff] font-bold`,
}