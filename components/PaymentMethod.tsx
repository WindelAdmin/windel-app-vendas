import {
    View, 
    Text,
    TouchableOpacity,
} from "react-native";
import {Ionicons, Feather} from "@expo/vector-icons";
import { useStore } from "~/store/store";
import * as Animatable from 'react-native-animatable';
import {router} from "expo-router";


export default function PaymentMethod(){

    const {setShowModalPaymentMethod, setShowModalCharger} = useStore()

    return (
       <Animatable.View className={styles.container} animation={"slideInUp"}>
          <View className="flex-row items-center justify-between mb-[15px]">
             <View></View>
             <Text className={styles.textTitle}>Selecione o método de pagamento</Text>
             <Ionicons name="close" size={30} onPress={() => {setShowModalPaymentMethod(false)}}/>
          </View>
          <View className="gap-4">
            <TouchableOpacity 
              className={styles.buttonPaymentMethod}
              onPress={() => {
                setShowModalPaymentMethod(false)
                setShowModalCharger(false)
                 router.push({
                    pathname: "/paymentsKeyboard",
                    params: {
                    paymentForm: "Crédito"
                 }
               });
              }}
              >
                <Text className={styles.textButtonPaymentMethod}>Crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className={styles.buttonPaymentMethod}
              onPress={() => {
                setShowModalPaymentMethod(false)
                setShowModalCharger(false)
                router.push({
                   pathname: "/paymentsKeyboard",
                   params: {
                   paymentForm: "Crédito Parcelado"
                }
              });
             }}
              >
                <Text className={styles.textButtonPaymentMethod}>Crédito Parcelado</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             className={styles.buttonPaymentMethod}
             onPress={() => {
                setShowModalPaymentMethod(false)
                setShowModalCharger(false)
                router.push({
                   pathname: "/paymentsKeyboard",
                   params: {
                   paymentForm: "Crédito Parc Emissor"
                }
              });
             }}
             >
                <Text className={styles.textButtonPaymentMethod}>Crédito Parc Emissor</Text>
            </TouchableOpacity>
          </View>
       </Animatable.View>
    )
}

const styles = {
    container: `w-[100%] bg-[#fff] h-[45%] absolute bottom-[0px] rounded-t-3xl px-[10px] overflow-hidden border border-[#A9A9A9] pb-[10px]`,
    textTitle: `text-[17px] text-center py-[15px] font-semibold ml-[25px]`,
    buttonPaymentMethod: `p-[12px] rounded border border-[#0251BD] border-[2px]`,
    textButtonPaymentMethod: `color-[#0251BD] font-bold text-center`
}