import {useState} from "react"
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import Sales from "~/components/Sales";



export default function Home() {


  return (
      <View className={styles.container}>
        <LinearGradient colors={['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Text className={styles.windel}>Windel</Text>
            <Text className={styles.mobile}>Mobile</Text>
          </View>
          <View className={styles.subContainer}>
            <Ionicons name='settings-sharp' color="#fff" size={25}/>
            <Feather name='more-vertical' color="#fff" size={25}/>
          </View>
        </LinearGradient>
        <View className={styles.containerContent}>
           <View className={styles.containerInfo}>
             <View>
               <Text className={styles.labelUser}>Usuário: master</Text>
               <Text className={styles.babelEnterprise}>Windel Sistemas LTDA</Text>
             </View>
             <Feather name='log-out' size={25} color={"#fff"} onPress={() => {router.replace("/")}}/>
           </View>
        </View>
        <Sales/>
      </View>
  );
}

const styles = {
  container: `flex-1`,
  header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center`,
  mobile: `text-[20px] color-[#fff]`,
  windel: `text-[20px] color-[#fff] font-bold`,
  subContainer: `flex-row gap-1`,
  containerContent: `px-[10px] flex-1`,
  containerInfo: `bg-[#458BED] p-[10px] rounded-xl my-[15px] flex-row justify-between items-center`,
  labelUser: `text-[17px] color-[#fff] font-bold`,
  babelEnterprise: `color-[#fff] text-[15px]`
}
