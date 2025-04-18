import {useState, useEffect} from "react"
import { 
  View, 
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Modal
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {router} from "expo-router";
import * as Animatable from 'react-native-animatable';
import { useTheme } from "~/components/Theme/ThemeProvider";
import { StatusBar} from "react-native";
import { useToast } from 'react-native-toast-notifications';
import LoadingModal from "~/components/LoadingModal";
import * as SecureStore from 'expo-secure-store';
import { KEYS } from "../consts/keys"


export default function Login() {

  const [msgInputEmpty, setMsgInputEmpty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNotShowPassword, setIsNotShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const { theme } = useTheme();

  const handleLogin = async () => {
     
      if(email.trim() === "" || password.trim() === "") {
        setMsgInputEmpty("Preencha o campo");
        return;
      }

      try{
        setLoading(true)
        const response = await fetch("https://winback-develop.windel.com.br/auth/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: email,
            password: password
          })
        });
       
      
        if (!response.ok) {
          toast.show("Email ou senha inválidos", {
            type: 'error',
            placement: 'bottom',
            duration: 1500,
            animationType: 'zoom-in',
            style: { backgroundColor: 'red' }
          })
          setLoading(false);
          return;
        }

        const data = await response.json();

        if (data.token) {
          await SecureStore.setItemAsync(KEYS.AUTH_TOKEN, data.token);
        }

        setLoading(false)
        router.replace("/home");

      }catch (error) {
        console.error("Error", error);
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      
      try {
        const token = await SecureStore.getItemAsync(KEYS.AUTH_TOKEN);
        if (token) {
          router.replace("/home");
          return;
        }
      } catch (err) {
        console.error("Erro ao verificar token:", err);
      }
    };
  
    checkLogin();
  }, []);

  return (
      <LinearGradient 
          className="flex-1"  
          colors={theme == "dark" ? ['#1C1C1C','#1C1C1C'] : ['#0965E5', '#0014EE', '#2773DC']} start={{ x: 0.4, y: 0.0 }}>

          <StatusBar barStyle="light-content" backgroundColor={theme === "dark" ? "#1C1C1C" : "#0965E5"}  />
          <KeyboardAvoidingView 
            className="flex-1"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
          
              <Animatable.View className={styles.containerHeader} animation={"slideInLeft"}>
                <Text className={theme == "dark" ? `text-[27px] font-bold color-[#00BFFF]` : `text-[27px] font-bold color-[#fff]`} >Bem Vindo(a)</Text>
                <Text className={styles.subTitle}>Ao Windel Vendas</Text>
              </Animatable.View>

              <Animatable.View 
                className={ theme == 'dark' ? `flex-1 bg-slate-800 rounded-s-3xl px-[25px]`
                : `flex-1 bg-[#F4F4F4] rounded-s-3xl px-[25px]`} 
                animation={"fadeInUp"}>
                    
                  <View className={styles.containerTitlesForm}>
                    <Text 
                      className={
                        theme === "dark" ? `color-[#00BFFF] text-[18px] font-bold` 
                        : `color-[#1448A8] text-[18px] font-bold`}>
                          Venda com mais
                    </Text>
                    <Text 
                      className={
                        theme === "dark" ? `color-[#fff] text-[25px] mt-[-6px]` 
                        : `color-[#7AA0D6] text-[25px] mt-[-6px]`}>
                          Praticidade!
                    </Text>
                  </View>
                  <View className={styles.input}>
                    <Ionicons name="person-circle" size={25} color={"#B6C5DA"}/>
                    <TextInput
                      onChangeText={(value) => setEmail(value)}
                      className="flex-1"
                      placeholder="Usuário"
                    />
                  </View>
                  <Text 
                    style={{
                      display: `${email.length != 0 ? "none" 
                      : msgInputEmpty == "" ? "none"
                      : "flex" }`, color: "#FF0000"}}>
                        {msgInputEmpty}
                  </Text>
                
                  <View className={styles.input}>
                      <Ionicons name="lock-closed" size={25} color={"#B6C5DA"}/>
                      <TextInput
                        secureTextEntry={isNotShowPassword}
                        onChangeText={(value) => setPassword(value)}
                        className="flex-1"
                        placeholder="Senha"
                      />
                      <Ionicons 
                        name={isNotShowPassword ? "eye-off" : "eye"} 
                        size={25} color={"#B6C5DA"} 
                        onPress={() => setIsNotShowPassword(!isNotShowPassword)}/>
                  </View>
                  <Text 
                    style={{
                      display: `${password.length != 0 ? "none"
                      : msgInputEmpty == "" ? "none"
                      : "flex" }`, color: "#FF0000"}}>
                        {msgInputEmpty}
                  </Text>
                  <Text 
                  className={
                    theme == "dark" ? `self-end color-[#fff] mt-[10px]` 
                    : `self-end color-[#7AA0D6] mt-[10px]`}>
                      Esqueceu a senha?
                  </Text>

                  <TouchableOpacity className={styles.button} onPress={handleLogin}>
                    <Text className={styles.textButton}>Entrar</Text>
                  </TouchableOpacity>
              </Animatable.View>
          </KeyboardAvoidingView>
          <Modal visible={loading} transparent={true}>
             <LoadingModal/>
          </Modal>
    </LinearGradient>
  );
}

const styles = {
  containerHeader: `mt-[50px] ml-[25px] mb-[40px]`,
  subTitle: `text-[25px] color-[#fff]`,
  containerTitlesForm: `mt-[35px]`,
  input: `w-full flex-row bg-[#FFFFFF] rounded-md py-1 px-2 items-center gap-1 border border-[#C9C9C9] mt-[20px]`,
  button: `bg-[#2773DC] rounded py-[8px] mt-[20px]`,
  textButton: `text-[20px] color-[#fff] text-center`
}