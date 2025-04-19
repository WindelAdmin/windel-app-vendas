import { View, Text, Switch, TouchableOpacity, Modal } from "react-native";
import { useTheme } from "~/components/Theme/ThemeProvider";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import LogoutModal from "~/components/LogoutModal";
import { useStore } from "~/store/store";




export default function Settings() {

    const { theme, toggleTheme } = useTheme();
    const {showModalLogout, setShowModalLogout} = useStore(); 
    
    return (
      <View className={theme == "dark" ? "flex-1 bg-gray-900" : "flex-1 "}>
        <LinearGradient 
          colors={
          theme == "dark" ? ['#1C1C1C', '#1C1C1C'] : ['#0965E5', '#0251BD']} 
          className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Configurações</Text>
          </View>
        </LinearGradient>
        <View className={styles.containerContent}>
          <View 
           className={
            theme == "dark" ? "bg-gray-800 px-2 py-2 rounded-md border border-[#363636]" 
            : "bg-slate-200 rounded px-2 py-2 border-gray-300 border"}>
            <View className="flex-row items-center justify-between">
                <Text 
                className={
                    theme == "dark" ? "text-[18px] font-semibold text-white"
                    : "text-[18px] font-semibold text-gray-700"}>
                     { 
                       theme == "dark" ? "Desativar modo escuro" 
                       : "Ativar modo escuro"
                     }   
                </Text>
                <Switch
                onValueChange={toggleTheme}
                value={theme == "dark"}
                trackColor={{ false: '#A9A9A9', true: '#81b0ff' }}
                thumbColor={theme == "dark" ? "#fff" : "#0965E5"}
                />
            </View>
          </View>
           <TouchableOpacity 
            className={
             theme == "dark" ? "bg-gray-800 rounded px-2 py-2 mt-10 border border-[#363636] flex-row justify-between"
            : "bg-slate-200 rounded px-2 py-2 mt-10 border-gray-300 border flex-row justify-between"}
            onPress={() => setShowModalLogout(true)}
            >
                <Text 
                 className={
                    theme == "dark" ? "text-[18px] font-semibold text-white"
                    : "text-[18px] font-semibold text-gray-700"}>
                       Sair
                </Text>
                <Feather name='log-out' size={25} color={theme == "dark" ? "#fff" : "#0965E5"}/>
            </TouchableOpacity>
            <Modal visible={showModalLogout} transparent={true}>
               <LogoutModal/>
            </Modal>
        </View>
      </View>
    )
}

const styles = {
    subContainer: `flex-row gap-4 items-center`,
    containerContent: `p-[20px]`,
    header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
}