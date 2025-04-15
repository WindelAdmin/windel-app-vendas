import { View, Text, Switch } from "react-native";
import { useTheme } from "~/components/Theme/ThemeProvider";
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";

export default function Settings() {

    const { theme, toggleTheme } = useTheme();

    return (
      <View className={theme == "dark" ? "flex-1 bg-gray-900" : "flex-1 "}>
        <LinearGradient colors={theme == "dark" ? ['#1C1C1C', '#1C1C1C'] : ['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Ionicons name='arrow-back' color="#fff" size={25} onPress={() => router.back()}/>
            <Text className="text-[20px] color-white">Configurações</Text>
          </View>
        </LinearGradient>
        <View className="flex-row p-6 items-center justify-between">
            <Text 
             className={
                theme == "dark" ? "text-[18px] font-semibold text-white"
                : "text-[18px] font-semibold text-gray-700"}>
                    Ativar modo escuro
            </Text>
            <Switch
             onValueChange={toggleTheme}
             value={theme == "dark"}
             trackColor={{ false: '#A9A9A9', true: '#81b0ff' }}
             thumbColor={theme == "dark" ? "#fff" : "#0965E5"}
            />
        </View>
      </View>
    )
}

const styles = {
    subContainer: `flex-row gap-4 items-center`,
    header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
}