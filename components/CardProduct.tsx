import React from "react";
import {View, Text} from "react-native"

type CardProps = {
    name: string;
    price: number
}

export default function CardProduct ({name, price}: CardProps){
    return (
      <View className={style.container}>
        <View className={style.image}>
            <Text className="color-slate-500">Imagen</Text>
        </View>
        <View className="items-end">
         <Text className={style.labelName}>{name}</Text>
         <Text className={style.labelPrice}>R$ {price}</Text>
        </View>
      </View>
    )
}

const style = {
    image: `bg-[#DCDCDC] w-[20%] rounded justify-center items-center`,
    container: `flex-row justify-between bg-[#fff] mb-[10px] p-[10px] rounded-md border border-[#D3D3D3]`,
    labelName:`text-[18px] font-bold color-[#363636]`,
    labelPrice: `font-bold color-[#363636]`
}