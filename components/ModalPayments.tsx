import {
  View, 
  Text, 
  TouchableOpacity, 
  Modal
} from "react-native";
import {Ionicons, Feather, FontAwesome, MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import { useStore } from "~/store/store";
import {router} from "expo-router";
import { BlurView } from 'expo-blur';
import PaymentMethod from "./PaymentMethod";


export default function ModalPayments() {

  const {
    setShowModalCharger,
    showModalPaymentMethod,
    setShowModalPaymentMethod
  } = useStore()

    return (
      <BlurView intensity={80} tint="dark" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <View className={styles.containerContent}>
           <View className="flex-row items-center justify-between">
             <Ionicons name="arrow-back" size={25} onPress={() => setShowModalCharger(false)}/>
              <Text className={styles.title}>Formas de Pagamento</Text>
            <View></View>
          </View>
          <Text className={styles.labelValue}>R$ 20,00</Text>
              <View className={styles.containerCardsPayments}>
                <TouchableOpacity 
                  className={styles.cardPayments}
                  onPress={() => {
                    setShowModalCharger(false);
                    router.push({
                        pathname: "/paymentsKeyboard",
                        params: {
                          paymentForm: "Dinheiro"
                        }
                    })
                  }} 
                  >
                    <FontAwesome name="money" size={25}/>
                    <Text>Dinheiro</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className={styles.cardPayments}
                  onPress={() => setShowModalPaymentMethod(true)}
                  >
                    <FontAwesome name="credit-card" size={25}/>
                    <Text>Crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className={styles.cardPayments}
                  onPress={() => {
                    setShowModalCharger(false);
                    router.push({
                        pathname: "/paymentsKeyboard",
                        params: {
                          paymentForm: "Débito"
                        }
                    });
                  }} 
                  >
                    <Feather name="credit-card" size={25}/>
                    <Text>Débito</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  className={styles.cardPayments}
                  onPress={() => {
                    setShowModalCharger(false);
                    router.push({
                        pathname: "/paymentsKeyboard",
                        params: {
                          paymentForm: "Boleto"
                        }
                    });
                  }} 
                  >
                    <MaterialCommunityIcons name="barcode" size={25} />
                    <Text>Boleto</Text>
                </TouchableOpacity>

            </View>
         </View>
         <Modal visible={showModalPaymentMethod} transparent={true}>
            <PaymentMethod/>
         </Modal>
      </BlurView>
    )
}

const styles = {
  containerContent: `w-[85%] bg-[#fff] rounded-xl p-[10px] overflow-hidden`,
  title: `pr-7 font-bold`,
  containerCardsPayments: `flex-row flex-wrap gap-1 justify-center`,
  cardPayments: `justify-center items-center p-[14px] h-[90px] rounded border border-[#DCDCDC]`,
  labelValue: `text-[25px] my-[10px] self-center font-bold` 
}

