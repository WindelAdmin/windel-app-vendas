import { 
    View, 
    ActivityIndicator,
    Text 
} from "react-native"

export default function LoadingModal() {
    return(
     <View className={style.container}>
       <View className="w-[9rem] h-[4rem] bg-white justify-center items-center rounded-md flex-row gap-2">
          <ActivityIndicator size={30}/>
          <Text>Aguarde...</Text>
       </View>
     </View>
    )
}

const style = {
    container: `flex-1 justify-center items-center bg-[rgba(0.0.0.0.5)]`
}