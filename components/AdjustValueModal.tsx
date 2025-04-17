import React from 'react'
import { 
 View, 
 Text, 
 TouchableOpacity, 
 KeyboardAvoidingView, 
 Platform,
 TextInput
} from 'react-native'
import { BlurView } from 'expo-blur';
import { useStore } from "~/store/store";


export default function AdjustValueModal(){

    const {
        setShowModalAsjustValue,
        label
    } = useStore();

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
         >
           <BlurView intensity={80} tint="dark" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             <View className={styles.containerContent}>
               <Text className='text-[18px] font-semibold text-center mb-4'>Aplicar {label}</Text>
               <View className='bg-[#edededdd] rounded border border-slate-300 mb-4'>
                 <TextInput
                   className='px-2'
                   placeholder={`Valor do ${label}`}
                 />
                <View className='h-[0.1rem] bg-slate-300'></View>
                <TextInput
                   className='px-2'
                   placeholder={`Percentual do ${label}`}
                />
               </View>
               <View className='flex-row py-3'>
                 <TouchableOpacity className='w-[50%]' onPress={() => setShowModalAsjustValue(false)}>
                    <Text className='text-center font-semibold'>Cancelar</Text>
                 </TouchableOpacity>
       
                 <TouchableOpacity className='w-[50%]'>
                    <Text className='text-center font-semibold'>Aplicar</Text>
                 </TouchableOpacity>
               </View>
             </View>
           </BlurView>
      </KeyboardAvoidingView>
    )
}

const styles = {
    container: ``,
    containerContent: `w-[70%] bg-[#fff] rounded-xl p-[10px] overflow-hidden`
}