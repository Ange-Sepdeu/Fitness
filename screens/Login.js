import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from "../firebase"
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
 
//   const navigation = useNavigation()
// useEffect(() =>{
//   const unsubscribe=auth.onAuthStateChanged(user => {
//     if (user) {
//       navigation.navigate("Home")
//     }
//   })
//   return unsubscribe
// },
// [])
  
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth,email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        props.navigation.navigate("Home")
       })
      }
    catch (error) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        setError('Your email or password was incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else {
        setError('There was a problem with your request');
      }
    }
  }
  
  
  return (
    <ScrollView>
    <View style={tw `flex-1 p-2 bg-gray-200`}>
      <Image source={require("../assets/login.png")} resizeMode='contain' style={tw`w-110 h-110 self-center mt-[-15%]`} />
      <View style={tw`p-5 bg-white rounded-10 mt-[-20%] h-full`}>
      <Text style={tw`text-blue-950 font-bold text-8`}>Login</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput 
        onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Email address"
          autoCapitalize="none"  
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}></TextInput>
        <TextInput 
        onChangeText={setPassword}
          value={password}
          keyboardType="password"
          placeholder="Password"
          autoCapitalize="none"  
          style={tw`text-black text-lg rounded-xl mt-7 w-full p-4 bg-gray-200`}
          secureTextEntry
          ></TextInput>
        <View 
        style={tw`mt-7`}>
          <Text style={tw`text-[#191970] font-bold text-sm text-right`}>Forgot Password?</Text>
        </View>
        <Pressable
          onPress={loginUser}
          style={tw `bg-[#191970] w-[90%] p-5 rounded-10 self-center mt-5 `} disabled={!email || !password} >
          <Text style={tw`text-white text-5 font-bold text-center `}>Login</Text>
        </Pressable>
        <View style={tw`flex flex-row  items-center mt-7`}>
          <Text style={tw`text-sm text-gray-400 font-bold`} >Don't have an account?</Text>
          <TouchableOpacity  onPress={() => props.navigation.navigate("Register")}>
            <Text style={tw`text-[#191970] text-sm font-bold`}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}


export default Login

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign:"center",
  },
})