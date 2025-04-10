import { 
  View, 
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from "react-native";
import {Ionicons} from "@expo/vector-icons"

export default function Login() {
  return (
     <KeyboardAvoidingView 
     className={styles.containerLogin}
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     >
        <View className={styles.containerHeader}>
          <Text className={styles.title}>Bem Vindo(a)</Text>
          <Text className={styles.subTitle}>Ao Windel Mobile</Text>
        </View>
        <View className={styles.containerForm}>
          <View className={styles.containerTitlesForm}>
            <Text className={styles.textTitleOneForm}>Venda com mais</Text>
            <Text className={styles.textTitleTwoForm}>Praticidade!</Text>
          </View>
          <View>
             <Ionicons name="person-circle" size={25} color={"#B6C5DA"}/>
             <TextInput
             placeholder="Usuário"
             />
          </View>
        </View>
     </KeyboardAvoidingView>
  );
}

const styles = {
  containerLogin: `flex-1 bg-[#0965E5]`,
  containerHeader: `mt-[50px] ml-[25px] mb-[40px]`,
  containerForm: `flex-1 bg-[#F4F4F4] rounded rounded-s-3xl `,
  title: `text-[27px] font-bold color-[#fff]`,
  subTitle: `text-[25px] color-[#fff]`,
  textTitleOneForm: `color-[#1448A8] text-[18px] font-bold`,
  textTitleTwoForm: `color-[#7AA0D6] text-[25px]`,
  containerTitlesForm: `mt-[35px] ml-[25px]`,
}