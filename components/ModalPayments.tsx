import {View, Text} from "react-native";
import {Ionicons, Feather, FontAwesome, MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import { useStore } from "~/store/store";

export default function ModalPayments() {

  const {setShowModalChanger} = useStore()

    return (
      <View className={styles.container}>
         <View className={styles.containerContent}>
          <View className="flex-row items-center justify-between">
            <Ionicons name="arrow-back" size={25} onPress={() => setShowModalChanger(false)}/>
            <Text className={styles.title}>Formas de Pagamento</Text>
            <View></View>
          </View>
          <Text className={styles.labelValue}>R$ 20,00</Text>
          <View className={styles.containerCardsPayments}>
           <View className={styles.cardPayments}>
              <FontAwesome name="money" size={25}/>
              <Text>Dinheiro</Text>
           </View>
           <View className={styles.cardPayments}>
              <FontAwesome name="credit-card" size={25}/>
              <Text>Crédito</Text>
           </View>

           <View className={styles.cardPayments}>
              <Feather name="credit-card" size={25}/>
              <Text>Débito</Text>
           </View>

           <View className={styles.cardPayments}>
              <MaterialCommunityIcons name="barcode" size={25}/>
              <Text>Boleto</Text>
           </View>
         </View>
         </View>
      </View>
    )
}

const styles = {
  container: `flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center`,
  containerContent: `w-[85%] h-[40%] bg-[#fff] rounded-xl p-[10px]`,
  title: `pr-7 font-bold`,
  containerCardsPayments: `flex-row flex-wrap space-x-4 gap-4 justify-center`,
  cardPayments: `justify-center items-center w-[40%] h-[90px] rounded border border-[#DCDCDC]`,
  labelValue: `text-[25px] my-[10px] self-center font-bold` 
}

