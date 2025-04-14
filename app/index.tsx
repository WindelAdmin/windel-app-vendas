import {useState} from "react"
import { 
  View, 
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {router} from "expo-router";
import * as Animatable from 'react-native-animatable';
import { useStore } from "~/store/store";


export default function Login() {

  const [msgInputEmpty, setMsgInputEmpty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNotShowPassword, setIsNotShowPassword] = useState(true);


  const handleLogin = () => {
    if(email.trim() === "" || password.trim() === "") {
      setMsgInputEmpty("Preencha o campo");
      return;
    }else{
      router.replace("/home")
    }
  }

  return (
    <LinearGradient className="flex-1"  colors={['#0965E5', '#0014EE', '#2773DC']} start={{ x: 0.4, y: 0.0 }}>
     <KeyboardAvoidingView 
     className="flex-1"
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     >
        <Animatable.View className={styles.containerHeader} animation={"slideInLeft"}>
          <Text className={styles.title}>Bem Vindo(a)</Text>
          <Text className={styles.subTitle}>Ao Windel Mobile</Text>
        </Animatable.View>
        <Animatable.View className={styles.containerForm} animation={"fadeInUp"}>
          <View className={styles.containerTitlesForm}>
            <Text className={styles.textTitleOneForm}>Venda com mais</Text>
            <Text className={styles.textTitleTwoForm}>Praticidade!</Text>
          </View>
          <View className={styles.input}>
             <Ionicons name="person-circle" size={25} color={"#B6C5DA"}/>
             <TextInput
               onChangeText={(value) => setEmail(value)}
               className="flex-1"
               placeholder="Usuário"
             />
          </View>
          <Text style={{display: `${email.length != 0 ? "none" : msgInputEmpty == "" ? "none" : "flex" }`, color: "#FF0000"}}>{msgInputEmpty}</Text>
          
          <View className={styles.input}>
              <Ionicons name="lock-closed" size={25} color={"#B6C5DA"}/>
              <TextInput
                secureTextEntry={isNotShowPassword}
                onChangeText={(value) => setPassword(value)}
                className="flex-1"
                placeholder="Senha"
              />
              <Ionicons 
                name={isNotShowPassword ? "eye-off" : "eye"} size={25} color={"#B6C5DA"} onPress={() => setIsNotShowPassword(!isNotShowPassword)}/>
          </View>
          <Text style={{display: `${password.length != 0 ? "none" : msgInputEmpty == "" ? "none" : "flex" }`, color: "#FF0000"}}>{msgInputEmpty}</Text>

          <Text className={styles.forgotPassword}>Esqueceu a senha?</Text>

           <TouchableOpacity className={styles.button} onPress={handleLogin}>
             <Text className={styles.textButton}>Entrar</Text>
           </TouchableOpacity>
        </Animatable.View>
     </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = {
  containerHeader: `mt-[50px] ml-[25px] mb-[40px]`,
  containerForm: `flex-1 bg-[#F4F4F4] rounded-s-3xl px-[25px]`,
  title: `text-[27px] font-bold color-[#fff]`,
  subTitle: `text-[25px] color-[#fff]`,
  textTitleOneForm: `color-[#1448A8] text-[18px] font-bold`,
  textTitleTwoForm: `color-[#7AA0D6] text-[25px] mt-[-6px]`,
  containerTitlesForm: `mt-[35px]`,
  input: `w-full flex-row bg-[#FFFFFF] rounded-md py-1 px-2 items-center gap-1 border border-[#C9C9C9] mt-[20px]`,
  forgotPassword: `self-end color-[#7AA0D6] mt-[10px]`,
  button: `bg-[#2773DC] rounded py-[8px] mt-[20px]`,
  textButton: `text-[20px] color-[#fff] text-center`
}