import {useState} from "react"
import { View, Text, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import Sales from "~/components/Sales";
import Data from "../data.json";
import CardProduct from "~/components/CardProduct";
import { useTheme } from "~/components/Theme/ThemeProvider";
import { StatusBar} from "react-native";



export default function Home() {

  const {theme} = useTheme();

  return (
      <View className={theme == "dark" ? "flex-1 bg-gray-900" : "flex-1 "}>
        <StatusBar barStyle="light-content" backgroundColor={theme === "dark" ? "#1C1C1C" : "#0965E5"} />
        <LinearGradient colors={theme == "dark" ? ['#1C1C1C', '#1C1C1C'] : ['#0965E5', '#0251BD']} className={styles.header}>
          <View className={styles.subContainer}>
            <Text className={styles.windel}>Windel</Text>
            <Text className={styles.mobile}>Mobile</Text>
          </View>
          <View className={styles.subContainer}>
            <Ionicons name='settings-sharp' color="#fff" size={25} onPress={() => router.push("/settings")}/>
          </View>
        </LinearGradient>
        <View className={styles.containerContent}>
        {/*    <View 
             className={
              theme == "dark" ? `bg-[#1C1C1C] p-[10px] border-gray-800 border rounded-xl my-[15px] flex-row justify-between items-center` 
              : `bg-[#458BED] p-[10px] rounded-xl my-[15px] flex-row justify-between items-center`}>
             <View>
               <Text className={styles.labelUser}>Usuário: master</Text>
               <Text className={styles.labelEnterprise}>Windel Sistemas LTDA</Text>
             </View>
             <Feather name='log-out' size={25} color={"#fff"} onPress={() => {router.replace("/")}}/>
           </View> */}
            <View className={styles.input}>
                <Ionicons name="search" size={25} color={"#B6C5DA"}/>
                <TextInput
                    className="flex-1"
                      placeholder="Busque um item"
                />
            </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Data}
                contentContainerStyle={{ paddingBottom: 120 }}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                <CardProduct
                  name={item.nome}
                  price={item.preco}
               />
              )}
             />
        </View>
        <Sales/>
      </View>
  );
}

const styles = {
  header: `px-[20px] py-[20px] rounded-b-2xl overflow-hidden flex-row justify-between items-center mb-[15px]`,
  mobile: `text-[20px] color-[#fff]`,
  windel: `text-[20px] color-[#fff] font-bold`,
  subContainer: `flex-row gap-1`,
  containerContent: `px-[10px] flex-1`,
  labelUser: `text-[17px] color-[#fff] font-bold`,
  labelEnterprise: `color-[#fff] text-[15px]`,
  input: `w-full flex-row bg-[#FFFFFF] rounded-md py-1 px-2 items-center gap-1 border border-[#C9C9C9] mb-[15px]`,
}
