import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const Onboarding = () => {
    // const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={tw`bg-white flex-1 items-center p-8 mt-10`}>
            <Image source={require('../assets/onboard2.png')} style={styles.img} resizeMode='contain' />
            <Text style={tw `text-[#191970] text-3xl font-bold text-center mt-90`}>Your daily Working Companion</Text>
            <Text style={tw `text-[#191970] text-sm font-semibold text-center mt-5`}>Make your body healthy and fit with the BESTFIT App!</Text>
            <Pressable
                // onPress={() => {
                //     navigation.navigate("Login");
                // }}
                style={tw`bg-[#191970] w-[80%] rounded-15 items-center p-4 mt-10`}>
                <Text style={tw`text-white text-2xl font-bold text-center`}>Get Started</Text>
            </Pressable>
        </View>
        </ScrollView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    title: {
        color: '#191970',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 100,
        left: 135,
        height: 80,
        textDecorationLine: 'underline',

    },
    img: {
        width: 370,
        height: 400,
        position: 'absolute',
        borderRadius: 20,
        marginLeft: 10,
    }
})