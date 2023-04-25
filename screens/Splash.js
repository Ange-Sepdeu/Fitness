import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from "twrnc"

const Splash = () => {
    // const navigation = useNavigation();
    // setTimeout(() => {
    //     navigation.navigate("Onboarding");
    // }, 5000);
    return (
        <View 
         style={tw`bg-teal-600 flex-1 p-24 justify-center items-center`}>
            <Image source={require('../assets/splash2.png')} 
             style={tw `w-75 h-75 rounded-100`} 
             />
        <View style={tw`w-100 flex-1 p-24 justify-center items-center`}>
            <Text style={tw`text-white top-10 absolute h-80 text-center text-4xl underline font-bold`}
            >BESTFIT</Text>
            <ActivityIndicator size="large" color="#fff" style={tw`top-[50%]`}/>
        </View>
        </View>

    )
}

export default Splash