import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { useStore } from "~/store/store";
import {router} from "expo-router";


export default function LogoutModal() {

  const {setShowModalLogout} = useStore()
  
  return (
    <BlurView intensity={80} tint="dark" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View className={styles.containerContent}>
        <Text className='text-[18px] font-semibold text-center mb-1'>Atenção</Text>
        <Text className='text-center'>Você realmente deseja sair do aplicativo?</Text>
        <View className='flex-row py-3'>
          <TouchableOpacity className='w-[50%]' onPress={() =>setShowModalLogout(false)}>
             <Text className='text-center font-semibold'>Não</Text>
          </TouchableOpacity>

          <TouchableOpacity className='w-[50%]' onPress={() => {
            router.replace("/");
            setShowModalLogout(false)
            }}>
             <Text className='text-center font-semibold'>Sim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  )
}

const styles = {
  container: ``,
  containerContent: `w-[70%] bg-[#fff] rounded-xl p-[10px] overflow-hidden`
}