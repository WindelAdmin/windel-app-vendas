import React from "react";
import {View, Text , TouchableOpacity} from "react-native";
import { useTheme } from "~/components/Theme/ThemeProvider";
import {Ionicons, Feather} from "@expo/vector-icons";

type CardProps = {
    name: string;
    price: number
}

export default function CardProduct ({name, price}: CardProps){

    const { theme } = useTheme();

    return (
      <View className={theme == "dark" ? `flex-row justify-between bg-gray-800 mb-[10px] p-[10px] rounded-md border border-[#363636]` : `flex-row justify-between bg-[#fff] mb-[10px] p-[10px] rounded-md border border-[#D3D3D3]`}>
        <View className={style.image}>
            <Text className="color-slate-500">Imagem</Text>
        </View>
        <View className="gap-2">
            <View className="items-end">
            <Text 
              className={theme == "dark" ? `text-[18px] font-bold color-[#fff]` 
              : `text-[18px] font-bold color-[#363636]`}>
                {name}
            </Text>
            <Text 
              className={theme == "dark" ? `font-semibold color-[#fff]`
              : `font-semibold color-[#363636]`}>
                R$ {price}
            </Text>
            </View>
            <View className="flex-row justify-end gap-4">
              <TouchableOpacity className={theme == "dark" ? "bg-[#FF0000] p-1 rounded": "bg-red-500 p-1 rounded"}>
                <Ionicons name="remove" size={25} color={'#fff'}/>
              </TouchableOpacity>
              <TouchableOpacity className={theme == "dark" ? "bg-[#00FF00] p-1 rounded" : "bg-green-600 p-1 rounded"}>
                <Ionicons name="add" size={25} color={theme == "dark" ? "#2F4F4F" : "#fff"}/>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
}

const style = {
    image: `bg-[#DCDCDC] w-[30%] rounded justify-center items-center`,
}