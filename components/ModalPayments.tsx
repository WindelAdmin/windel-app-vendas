import {View, Text} from "react-native";
import {Ionicons, Feather} from "@expo/vector-icons";
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
         </View>
      </View>
    )
}

const styles = {
  container: `flex-1 bg-[rgba(0,0,0,0.5)] justify-center items-center`,
  containerContent: `w-[85%] h-[60%] bg-[#fff] rounded-xl p-[10px]`,
  title: `pr-7 font-bold`
}

